import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import AddPost from "./components/Posts/CreatePost";
import Post from "./components/Posts/Post";

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
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Weight
        <small className='text-muted'>Tracker</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <DisplayPosts parentEntries={entries} />
          </div>
          <div className='border-box'>
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <Post  parentPosts={entry} />
          </div>
        </div>
      </div>
    </div>
  );
export default App;
