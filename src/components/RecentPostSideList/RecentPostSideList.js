import React from 'react';
import SideList from '../SideList/SideList';
import { useRecentPostContext } from '../../CricketAppContext';
import { Grid, Box } from '@material-ui/core';

function RecentPostSideList() {
  let posts = useRecentPostContext();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box mt={3}>
          <SideList 
            posts={posts}
            heading={"Recent Posts"}
          />
        </Box>
      </Grid>
    </Grid>
  )
}

export default RecentPostSideList;
