import React from 'react'
import { Grid, Box, Hidden } from '@material-ui/core'
import SideList from '../SideList/SideList'
import { useRecentPostContext } from '../../CricketAppContext'
import ArticleContent from '../ArticleContent/ArticleContent';
import Tags from '../Tags/Tags';
import RelatedPost from '../RelatedPost/RelatedPost';
import { Redirect } from 'react-router-dom';

function getPost(id, posts) {
  for(let i=0;i<posts.length;i++){
    if(parseInt(posts[i].id) === parseInt(id)){
      return posts[i];
    }
  }
}

function Article(props) {
  let recentPost = useRecentPostContext();
  let post = getPost(props.match.params.id, recentPost)
  if(!post){
    return <Redirect to="/" />
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1}>

          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container>
              <Grid item xs={12}>
                <Box mt={6}>
                  <ArticleContent 
                    post={post}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box mt={5} mb={5}>
                  <Tags tags={post.tag} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <RelatedPost />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box mt={2} p={5}>
              <Grid container>
                <Grid item xs={12}>
                  <Hidden mdDown>
                    <SideList
                      posts={recentPost.slice(0, 5)}
                      heading={"Recent Posts"}
                    />
                  </Hidden>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Article
