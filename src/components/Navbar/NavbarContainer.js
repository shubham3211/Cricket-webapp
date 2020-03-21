import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Logo from '../../assets/images/Logo.png';
import Navbar from './Navbar';

function NavbarContainer() {
  let navItems = [{val: 'Home', url: "/"}, {val: "Cricket", url: "/"}, {val: "Article", url: "/"}]

  return (
    <Box mt={1}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar logo={Logo} navItems={navItems} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default NavbarContainer
