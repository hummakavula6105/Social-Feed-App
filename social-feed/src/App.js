import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/Posts/CreatePost";
import Post from "./components/Posts/Post";
import NavBar from "./components/App.js";


function App() {
  const [entries, setEntries] = useState([
    {
      name: 'name',
      post: 'post'
    }])

  function addNewPost(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div>
      <
    </div>
  );
  }
export default App;
