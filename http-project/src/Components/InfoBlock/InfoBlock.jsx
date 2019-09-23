import React from 'react';
import classes from './InfoBlock.css'

var InfoBlock = (props) =>{
    return(
        <div className={classes.container}>
            <img src={props.url} className={classes.pic}></img>
        </div>
    );
}

export default InfoBlock;