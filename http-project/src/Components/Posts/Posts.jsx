import React from 'react';
import classes from './Posts.css';

var Posts = props =>{
    return(
        <div className={classes.container} key={props.index}>
            <p>{props.title}</p>
            <p>{props.content}</p>
            <p>{props.author}</p>
        </div>
    );
}
 
 export default Posts;