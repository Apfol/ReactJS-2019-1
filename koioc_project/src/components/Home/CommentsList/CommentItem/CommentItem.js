import React from 'react';

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