import React from 'react';
import classes from './Question.css';
function Question(props) {
    return (
        <div className={classes.question}>
            <h1>{props.text}</h1>
            <hr />
            <input type="radio" className={props.className} id="option1" /><p>{props.option1}</p>
            <input type="radio" className={props.className} id="option2" /><p>{props.option2}</p>
            <input type="radio" className={props.className} id="option3" /><p>{props.option3}</p>
            <input type="radio" className={props.className} id="option4" /><p>{props.option4}</p>
        </div>
    );
}

export default Question;