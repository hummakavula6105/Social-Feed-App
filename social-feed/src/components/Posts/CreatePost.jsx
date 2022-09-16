
import React, {useState} from "react";

const AddPost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault()
        let newPost = {
            name: name,
            post: post,
            id: Math.random()
        };
        console.log(newPost);
        props.addNewPost(newPost)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
            <form onSubmit={handleSubmit} className='form-grid'>
        <div className='form-group'>
            <label>Name</label>
            <input type='text' className='form-control' value={name} onChange={(event) => setName((event.target.value))} />
        </div>
        <div className='form-group'>
            <label>Post</label>
            <input type='text' className='form-control' value={post} onChange={(event) => setPost(event.target.value)}/>
        </div>
        <div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}}>Submit</button>
        <div>
        </div>
        </div>
                </form>
                </div>
            <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default AddPost;