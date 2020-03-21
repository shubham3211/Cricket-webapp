import React from 'react'
import { Grid, Typography, Box, Divider } from '@material-ui/core'
import { useFactContext } from '../../CricketAppContext';
import './Fact.css';
import CircularProgress from '@material-ui/core/CircularProgress';

function Fact() {
  let fact = useFactContext();
  if(fact && fact.length){
    fact=fact[0].fact;
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box p={2} style={{backgroundColor: "#1e1e1e", color: "#fff", borderRadius: "15px"}}>
          {fact && fact.length ? <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">
                Did You Know !!!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box mt={2} mb={2}>
                <Divider className="slider" style={{backgroundColor: 'white'}} />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                {fact}
              </Typography>
            </Grid>
          </Grid> : (
            <Grid container justify="center">
              <CircularProgress />
            </Grid>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Fact
