import React from 'react'
import { Grid, Box, withStyles } from '@material-ui/core';
import { useTimelessPostContext } from '../../CricketAppContext';
import PostTab from '../PostsTab/PostTab';
import SideList from '../SideList/SideList';
import Fact from '../Fact/Fact';
import './Home.css'

const styles = theme => ({
  item1: {
    order: 1,
    [theme.breakpoints.down("sm")]: {
      order: 2
    }
  },
  item2: {
    order: 2,
    [theme.breakpoints.down("sm")]: {
      order: 1
    }
  }
})

function Home({classes}) {
  let recentPosts = useTimelessPostContext();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box m={2}>
          <Grid container>
            <Grid item xs={12} md={8} className={classes.item1}>
              <Box className="post-tab" mr={5}>
                <PostTab />              
              </Box>
            </Grid>
            <Grid item xs={12} md={4} className={classes.item2}>
              <Grid container>
                <Grid item xs={12}>
                  <Box mt={2}>
                    <Fact />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box mt={3}>
                      <SideList 
                        posts={recentPosts}
                        heading={"Timeless Series"}
                      />
                    </Box>
                  </Grid>
                </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Home);
