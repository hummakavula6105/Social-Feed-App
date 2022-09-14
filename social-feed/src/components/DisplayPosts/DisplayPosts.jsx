import Post from "../Posts/Post";
import React from "react";

const DisplayPosts = (props) => {
  return (
    <div className="table">
      <div>
        {props.parentEntries.map((entry) => {
          return <Post entry={entry} key = {entry.id} />;
        })}
      </div>
    </div>
  );
};

export default DisplayPosts;
