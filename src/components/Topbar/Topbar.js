import React from 'react'
import { Grid, Divider, Box } from '@material-ui/core'
import NavbarContainer from '../Navbar/NavbarContainer'
import Poster from '../Poster/Poster'

function Topbar() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavbarContainer />
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Box mt={4}>
          <Poster />
          <Box mt={3}>
            <Divider />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Topbar;
