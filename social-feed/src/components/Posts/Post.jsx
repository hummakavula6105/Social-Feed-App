// what does the post look like. you put that here
import React, { useState, useEffect } from 'react';
import DisplayPosts from '../DisplayPosts/DisplayPosts';
import AddPost from './CreatePost';
import App from '../../App';

const Post = ({entry}) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        let tempPost = entry.parentPosts.map(entry => {
            return [entry.name, entry.post];
        });
        setPost(tempPost);
    }, [entry.parentPosts])

    return ( 
        <tr>
        <td></td>

        <td>{entry.name}</td>
        <td>{entry.post}</td>
        </tr> );
}
 
export default Post;