import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

let postItemContentStyle = {
  maxHeight: 2*1.5+'rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}

function PostItem({
  imageSize, 
  imgSrc, 
  title, 
  content, 
  color, 
  children, 
  imageWidth, 
  imageHeight,
  titleVariant,
  id}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={imageSize} style={{maxWidth: imageWidth+'px', height: imageHeight+'px'}}>
            <img 
              src={imgSrc}
              alt=""
              style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px'}} />
          </Grid>
          <Grid item xs={Math.abs(12-imageSize)}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Link style={{color: "black", textDecoration: "none"}} to={`/post/${id}`}>
                  <Typography  variant={titleVariant} style={{fontWeight: 600}}>
                      {title}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                {content && <Typography color={color} style={postItemContentStyle}>{content}</Typography>}
              </Grid>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PostItem
