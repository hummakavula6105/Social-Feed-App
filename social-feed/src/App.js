import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";

function App() {
  const [entries, setEntries] = useState([
    {
      name: 'name',
      post: 'post',
    }

  ])
  return (
    <div className="App">
        Hello World!
        <DisplayPosts parentEntries={entries}/>

    </div>
  );
}

export default App;
