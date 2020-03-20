import React, { useState } from 'react'
import {useRecentPostContext, useHotPostContext} from '../../CricketAppContext';
import { Grid, Box, Typography } from '@material-ui/core';
import PostItem from '../PostItem/PostItem';
import { monthNames } from '../../assets/monthNames';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const getFullDate = (postDate) => {
  let date = new Date(postDate);
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();
  return `${monthNames[month]} ${day}, ${year}`
}

function a11yProps(index){
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel({posts, value, index}) {
  
  return (
    <Box value={value} hidden={value!==index} index={index}>
      {posts.map((post, index) => (
        <Box mt={4} key={index}>
          <PostItem
            title={post.title} 
            imgSrc={`https://cricsurf.com/files/${post.image}`}
            imageWidth={150}
            imageHeight={150}
            content={post.truncated_text}
            color="textSecondary"
            titleVariant="h6"
            imageSize={3}
            id={post.id}>
            <Typography>
              {post.author.name}
            </Typography>
            <Typography>
              {getFullDate(post.created_on)}
            </Typography>
          </PostItem>
        </Box>
      ))}
    </Box>
  )
}

function PostTab() {
  let recentPosts = useRecentPostContext();
  let hotPosts = useHotPostContext();
  let [tabValue, setTabValue] = useState(0);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Tabs indicatorColor="primary" value={tabValue} onChange={(e, newVal) => setTabValue(newVal)} aria-label="simple tabs example">
          <Tab disableRipple label="Recent" {...a11yProps(0)}/>
          <Tab disableRipple label="Hot" {...a11yProps(1)}/>
        </Tabs>
        <TabPanel posts={recentPosts} value={tabValue} index={0} />
        <TabPanel posts={hotPosts} value={tabValue} index={1} />
      </Grid>
    </Grid>
  )
}

export default PostTab
