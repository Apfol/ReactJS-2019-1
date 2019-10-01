import React from 'react';
import classes from'./CommentItem.css';

const AdvantageItem = (props) =>{
    
    return(
            <div className = {classes.comment}>
                <div className="card bg-light p-3 text-center">
                    <blockquote className="card-body">
                    <p>{props.comment.text}</p>
                        <footer>
                            <small>
                                {props.comment.tittle}
                            </small>
                        </footer>
                    </blockquote>
                </div>    
            </div>
            
    )
}


export default AdvantageItem;