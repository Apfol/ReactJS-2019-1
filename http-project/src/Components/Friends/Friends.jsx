import React from 'react';
import classes from './Friends.css';

var Friends = props =>{
    return(
        <div key={props.index} className={classes.friend}>
            <p>{props.name}</p>
        </div>
    );
}

export default Friends;