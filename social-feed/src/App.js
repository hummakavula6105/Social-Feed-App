import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import CreatePost from "./components/Posts/CreatePost";
import NavBar from "./components/DisplayPosts/NavBar";

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
    </div>

  );
}
export default App;
