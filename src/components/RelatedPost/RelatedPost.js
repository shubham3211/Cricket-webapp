import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostItem from '../PostItem/PostItem';
import { useRelatedPostContext } from '../../CricketAppContext';
import { Grid, Typography, Box, Divider } from '@material-ui/core';
import { monthNames } from '../../assets/monthNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const getFullDate = (postDate) => {
  let date = new Date(postDate);
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();
  return `${monthNames[month]} ${day}, ${year}`
}

const getPosts = (posts) => {
  return posts.map((post, index) => (
    <PostItem
      key={index}
      title={post.title} 
      imgSrc={`https://cricsurf.com/files/${post.image}`}
      imageWidth={246}
      imageHeight={182}
      titleVariant="h6"
      imageSize={12}
      id={post.id}>
      <Typography>
        {post.author.name}
      </Typography>
      <Typography>
        {getFullDate(post.created_on)}
      </Typography>
    </PostItem>
  ))
}

function RelatedPost() {
  let posts = useRelatedPostContext();
  let slider = useRef(null);
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false
  }
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box mt={4} mb={4}>
            <Grid container alignItems="center" justify="space-between">
              <Grid item xs>
                <Typography variant="h5">
                  Related Posts
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Divider />
              </Grid>
              <Grid item xs={1}>
                <Grid container justify="space-around">
                  <FontAwesomeIcon 
                    style={{cursor: "pointer"}} 
                    icon={faArrowCircleLeft} 
                    onClick={() => slider.current.slickPrev()} />
                  <FontAwesomeIcon 
                    style={{cursor: "pointer"}} 
                    icon={faArrowCircleRight}
                    onClick={() => slider.current.slickNext()} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Slider {...settings} ref={slider}>
        {getPosts(posts)}
      </Slider>
    </>
  )
}

export default RelatedPost
