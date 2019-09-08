import React from 'react';
import classes from './Elemento.css';

export default (props) => (
<div className={classes.boton}>
    <div style={{
        background: props.element.complete ? "red" : "blue"
    }} 
    onClick={props.toggleComplete}>
        <p>{props.element.text}</p>
    
    </div>
    <button onClick={props.deleteElement}>x</button>
</div>
);