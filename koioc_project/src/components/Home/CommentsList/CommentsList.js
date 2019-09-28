import React from 'react';
import CommentItem from './CommentItem/CommentItem';
import classes from './CommentsList.css';


const CommentsList = (props) =>{
  
    return(
        <ul className={classes.comments_list}>
          {props.commentsList.map((comment,index) => <CommentItem key={index} comment={comment}/> )}
        </ul>
    )
  
}


export default CommentsList;