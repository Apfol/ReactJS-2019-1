import React from 'react';
import classes from './Post.css';

const Post = props => {
    return(                          
        <div className={classes.all}>            
            <div className={classes.header}>
                <img src={props.imageProfile} className={classes.imageProfile} alt=""/>  
                <div className={classes.username}>{props.username}</div>  
            </div>        
            <div className={classes.photo}>
                <img src={props.image} className={classes.image} alt=""/>
            </div>
            <div className={classes.caption}>{props.caption}</div>
        </div>
    );
}

export default Post;