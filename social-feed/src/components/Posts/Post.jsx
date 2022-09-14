// what does the post look like. you put that here
import React, { useState } from "react";

const Post = ({ entry }) => {
  return (
    <div>
      {entry.name}
      <p>{entry.post}</p>
    </div>
  );
};

export default Post;
