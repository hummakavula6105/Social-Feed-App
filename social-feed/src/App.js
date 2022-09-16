import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/Posts/CreatePost";
import NavBar from "./components/DisplayPosts/NavBar";
import LikeButton from "./components/Posts/LikeButton";
import DislikeButton from "./components/Posts/DislikeButton";

function App() {
  const [entries, setEntries] = useState([
    {
      name: "name",
      post: "post",
      id: Math.random()
    },
  ]);

  function addNewPost(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar/>
      <CreatePost addNewPost = {addNewPost}/>
      <DisplayPosts parentEntries={entries}/>
      <LikeButton/>
      <DislikeButton/>
    </div>

  );
}
export default App;
