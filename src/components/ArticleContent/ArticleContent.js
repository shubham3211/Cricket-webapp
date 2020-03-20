import React from 'react'
import { Grid, Typography, Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import { monthNames } from '../../assets/monthNames';

function getFullDate(postDate){
  let date = new Date(postDate);
  let month = monthNames[date.getMonth()];
  let day = date.getDay();
  let year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

function ArticleContent(props) {
  let post = props.post;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" style={{textTransform: "uppercase"}}>
              {post.title}
            </Typography>
            <Box mt={1} mb={2}>
              <Typography variant="subtitle2" color="textSecondary">
                <FontAwesomeIcon icon={faUserCircle} /> {post.author.name}, {getFullDate(post.created_on)} | <FontAwesomeIcon icon={faClock} /> {post.time_to_read} min read | <FontAwesomeIcon icon={faEye} /> {post.metadata.views}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <img src={`https://cricsurf.com/files/${post.image}`} style={{width: '100%', height: '100%',borderRadius: '8px'}} alt=""/>
          </Grid>
          <Grid item xs={12}>
            <Box mt={5}>
              <Typography style={{whiteSpace: 'pre-line'}}>
                {post.extended_text}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ArticleContent
