import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';

function navbar({logo, navItems}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container >
          <Grid item>
            <img src={logo} style={{width: '60px', height: '54px'}} alt=""/>
          </Grid>
          {navItems.map((item, index) => (
            <Grid key={index} item>
              <Box pl={2} pr={2} pt={1}>
                <Typography align="center" color="textSecondary" variant="subtitle1">
                  {item.val}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default navbar
