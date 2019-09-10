import React from 'react';
import classes from './Task.css';
import logo1 from './borrar.png';

const Task = props=> {

    var deleteTask = () =>{
       props.delete(props.task)
    }

    return (
        <div id={props.id}>
            <label className={classes.container}>{props.task.task}
                <input type="checkbox"></input>
                <span className={classes.checkmark}></span>
            </label>
            <img onClick={deleteTask} className={classes.delete} src={logo1} alt="logo1-app"></img>
        </div>
    );

   
}

export default Task;