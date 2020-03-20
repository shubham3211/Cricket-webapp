import React from 'react'
import { Grid, Typography, Box, Divider } from '@material-ui/core'
import { useFactContext } from '../../CricketAppContext';
import './Fact.css'

function Fact() {
  let fact = useFactContext();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box p={2} style={{backgroundColor: "#1e1e1e", color: "#fff", borderRadius: "15px"}}>
          <Grid container>
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
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Fact
