import React from 'react';
import CommentItem from './CommentItem/CommentItem';
import './CommentsList.css';


const CommentsList = (props) =>{
  
    return(
        <ul className="comments_list">
          {props.commentsList.map((comment,index) => <CommentItem key={index} comment={comment}/> )}
        </ul>
    )
  
}


export default CommentsList;