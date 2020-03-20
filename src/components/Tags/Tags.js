import React from 'react';
import { Grid } from '@material-ui/core';
import './Tags.css';

function Tags(props) {
  console.log('tags props :', props);
  return (
    <Grid container>
      <Grid item xs={12}>
        <span className="head-tag">Tags</span>
        <span className="normal-tag">#CricketTags</span>
        <span className="normal-tag">#IPL Auction 2020</span>
        <span className="normal-tag">#M.S.Dhoni</span>
      </Grid>
    </Grid>
  )
}

export default Tags
