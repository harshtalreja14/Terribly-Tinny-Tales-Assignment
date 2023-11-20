import React from 'react';
import { BsDot } from 'react-icons/bs';
import { TiThumbsUp } from 'react-icons/ti';
import JsonData from '../Data.json';

function Posts() {
  const arr = JsonData[0];

  return (
    <div className="posts-section">
      <div className="postNumber">
        <p>{arr.PostNumber} Posts</p>
      </div>
      <div className="line"></div>
      {arr.Posts.map((Post, index) => (
        <div className="posts" key={Post.id || index}>
          <div className="title">
            <h1>{Post.Title}</h1>
            <TiThumbsUp className='TiThumbsUp' />
          </div>
          <div className="content">
            {Post.Content.substring(0, 150) + '...'}
          </div>
          <div className="details">
            <p><span>{Post.Type}</span> by {Post.Author}</p>
            <p>{Post.Date}<BsDot /> {Post.TimeToRead} Read <BsDot /> {Post.Views} views</p>
          </div>
          <hr className='postline' />
        </div>
      ))}
    </div>
  );
}

export default Posts;
