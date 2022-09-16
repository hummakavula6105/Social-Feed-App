// what does the post look like. you put that here
import React from "react";
import LikeButton from "./components/Posts/LikeButton.jsx";
import DislikeButton from "./components/Posts/DislikeButton";

const Post = ({ entry }) => {
  if (entry.name === 'name') {
    return
  }
  return (
    <div>
      <div className='container my-4 border border-info rounded'>
            <div className='row'>
                <div className='col-md-3'></div>
                  <div className='col-md-6'>
                  <h3>{entry.name}</h3>
                  <p>{entry.post}</p></div>
                <div className='col-md-3'></div>
                <LikeButton/>
                <DislikeButton/>
            </div>
        </div>
    </div>
  );
};

export default Post;
