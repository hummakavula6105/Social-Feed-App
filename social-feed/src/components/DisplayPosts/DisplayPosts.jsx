import Post from "../Posts/Post";
import React from 'react';


const DisplayPosts = (props) => {
    return (
        <table className='table'>
          <tbody>
            {props.parentEntries.map(entry => {
              return (
                <Post entry={entry}/>
              );
            })}
          </tbody>
      </table>
      );
}
 
export default DisplayPosts;