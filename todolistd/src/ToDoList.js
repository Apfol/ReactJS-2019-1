import React from 'react';
import classes from './ToDoList.css';

const ToDoList = props => {
    return(                          //onClick={props.taskCompleted}si el taskcompleted es true, coloque este estilo y si no lo es no coloque nada
        <div className={classes.all}>            
            <label className={classes.container}>
                <input  type="checkbox" onClick={props.taskCompleted}/>
                <span className={classes.checkmark}> </span>
            </label>
            
            <div style={{textDecoration: props.ToDo.taskCompleted === true ? "line-through":""}} className={classes.taskText}>
                {props.ToDo.taskText}
            </div>
            <button onClick={props.deleteTask} className={classes.deleteButton}>x</button>
        </div>
        
    );
}

export default ToDoList;