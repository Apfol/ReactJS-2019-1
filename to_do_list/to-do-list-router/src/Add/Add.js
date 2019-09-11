import React from 'react';
import classes from './Add.css';

const Add = props=> {
    return (
        <div>
            <input className={classes.text} type="text" ref={props.textInput}></input>
            <button className={classes.add} onClick = {props.changeState}>Add</button>
        </div>
    );
}

export default Add;