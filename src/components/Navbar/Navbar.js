import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

function navbar({logo, navItems}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container >
          <Grid item>
            <Link to="/">
              <img src={logo} style={{width: '60px', height: '54px'}} alt=""/>
            </Link>
          </Grid>
          {navItems.map((item, index) => (
            <Grid key={index} item>
              <Box pl={2} pr={2} pt={1}>
                <Link to={item.url} style={{textDecoration: "none"}}>
                  <Typography align="center" color="textSecondary" variant="subtitle1">
                    {item.val}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default navbar
