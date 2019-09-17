import React, {Component} from 'react';
import classes from './taskList.css';
import Task from './Task.js'

export default class TaskList extends Component{
render(){
    const{tasks,handleDelete,clearAll,handleComplete}=this.props;
    var cont= tasks.map(task=>{ 
        return(
            <Task 
                key={task.id}
                task={task.task}
                handleDelete={()=>{ handleDelete(task.id)}}
                handleComplete={() => { handleComplete(task.id)}}
            />

        );});
    return(
    <div className= {classes.container}>
        <ul className={classes.list}>
            {cont}
        </ul>
        
    </div>


    );

}

}