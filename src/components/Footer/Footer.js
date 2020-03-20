import React from 'react';
import { Grid, Divider, Typography, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Grid container style={{backgroundColor: "#1E1E1E", color: "white"}}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Box p={4}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Typography variant="h6" display="inline">
                      Social Media
                    </Typography>
                    <Grid item xs={1} style={{marginLeft: "20px"}}>
                      <Divider style={{backgroundColor: "#696868"}} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box mt={2}>
                    <FontAwesomeIcon style={{marginRight: "15px"}} icon={faTwitter} />
                    <FontAwesomeIcon style={{marginLeft: "15px", marginRight: "15px"}}  icon={faFacebook} />
                    <FontAwesomeIcon style={{marginLeft: "15px", marginRight: "15px"}}  icon={faInstagram} />
                    <FontAwesomeIcon style={{marginLeft: "15px", marginRight: "15px"}}  icon={faYoutube} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider style={{backgroundColor: "#696868"}} />
          </Grid>
          <Grid item xs={12}>
            <Box p={4}>
              <Grid container>
                <Grid item xs={4}>
                  <Grid container>
                    <Grid item xs={12}>
                      <img 
                        src={require("../../assets/images/darkLogo.png")}
                        style={{width: "80px", height: "70px"}} />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" style={{color: "#b4b4b4"}}>
                        <Box mt={2}>
                          © CricSurf 2019. All Rights Reserved
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="subtitle2">
                    <Box mt={5}>
                      <ul style={{
                        textTransform: "uppercase", 
                        listStyleType: "none",
                        display: "flex",
                        justifyContent: "space-between"}}>
                        <li>about</li>
                        <li>author</li>
                        <li>terms of service</li>
                        <li>copyright notice</li>
                        <li>privacy policy</li>
                        <li>sitemap</li>
                        <li>contact us</li>
                      </ul>
                    </Box>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Footer
