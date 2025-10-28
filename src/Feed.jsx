import React from 'react';
import StoryList from './StoryList';
import Posts from './Posts';

function Feed() {
  return (
    <>
      <div><StoryList/></div>
      <div><Posts /></div>
    </>
  );
}

export default Feed;
