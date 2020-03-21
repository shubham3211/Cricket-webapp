import React from 'react'
import { Grid, Box, Divider, Typography, CircularProgress } from '@material-ui/core'
import PostItem from '../PostItem/PostItem';
import { monthNames } from '../../assets/monthNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const getFullDate = (postDate) => {
  let date = new Date(postDate);
  let month = monthNames[date.getMonth()];
  let day = date.getDate();
  return `${month.slice(0, 3)} ${day}`
}

function getLoadingScreen() {
  return (
    <Grid container justify="center">
      <CircularProgress />
    </Grid>
  )
}

function SideList({posts, heading}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Typography color="textPrimary" variant="h5" display="inline">
            {heading}
          </Typography>
          <Grid item xs>
            <Box p={2}>
              <Divider />
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          {posts.length ?
            posts.map((post, index) => (
              <Grid key={index}>
                <PostItem 
                  title={post.title}
                  titleVariant="subtitle2"
                  imgSrc={`https://cricsurf.com/files/${post.image}`}
                  imageWidth={90}
                  imageHeight={90}
                  imageSize={3}
                  id={post.id}
                >
                  <Typography color="textSecondary" variant="subtitle2">
                    {post.author.name}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {getFullDate(post.created_on)} . {post.time_to_read} min read <FontAwesomeIcon icon={faStar} size="xs" />
                  </Typography>
                </PostItem>
                <Box mt={4} mb={4}>
                  <Divider />
                </Box>
              </Grid>
            ))
          : getLoadingScreen()}
        </Box>
      </Grid>
    </Grid>
  )
}

export default SideList
