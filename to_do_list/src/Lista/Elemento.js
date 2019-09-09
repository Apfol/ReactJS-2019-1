import React from 'react';
import classes from './Elemento.css';
import { classExpression } from '@babel/types';

export default (props) => (
<div className={classes.elemento} style={{
        background: props.element.complete ? "#df4c33" : ""
    }} >
    
    <div className={classes.div} 
    onClick={props.toggleComplete}>
        <p>{props.element.text}</p>
        
    </div>
    <div className={classes.div}>
        <button className={classes.boton} onClick={props.deleteElement}>Check!</button>
    </div>
</div>


);