// what does the post look like. you put that here
import React, { useState } from 'react';
// import DisplayPosts from '../DisplayPosts/DisplayPosts';
// import AddPost from './CreatePost';
// import App from '../../App';

const Post = (entry) => {

    const [name, setName] = useState(' ');
    const [post, setPost] = useState(' ');

    function handleSubmit(event) {
        event.preventDefault()
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        entry.addNewEntryProperty(newEntry)
    }

    // useEffect(() => {
    //     let tempPost = entry.parentPosts.map(entry => {
    //         return [entry.name, entry.post];
    //     });
    //     setPost(tempPost);
    // }, [entry.parentPosts])

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Name</label>
                <input type='string' className='form-control' value={name} onChange={(event) => setName(parseFloat(event.target.value))} />
            </div>
            <div className='form-group'>
                <label>Post</label>
                <input type='post' className='form-control' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Add</button>
        </form>
      );
    
}
 
export default Post;