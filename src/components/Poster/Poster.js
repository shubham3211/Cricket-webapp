import React from 'react'
import { Grid } from '@material-ui/core'

function Poster() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <img
          src={require('../../assets/images/title_image.png')} 
          style={{
            width: '100%',
            height: '100%'
          }} 
          alt=""/>
      </Grid>
    </Grid>
  )
}

export default Poster
