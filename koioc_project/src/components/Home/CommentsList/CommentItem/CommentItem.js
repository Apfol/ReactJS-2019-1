import React from 'react';
import {Link} from 'react-router-dom';

const AdvantageItem = (props) =>{
    
    return(
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
    )
}


export default AdvantageItem;