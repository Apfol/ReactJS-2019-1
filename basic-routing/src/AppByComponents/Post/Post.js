import React from 'react';
import './Post.css';

var Post = (props) => {
    return (
        <div onClick = {props.openFullPost} className = "post">
            <h2>{props.post.title}</h2>
            <p>{props.post.author}</p>
        </div>
    )
}

export default Post;