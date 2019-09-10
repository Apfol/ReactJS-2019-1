import React, {Component} from 'react';
import classes from './Task.css';

class Task extends Component {

    /*
    Change the className of an uncompleted task to a completed task
    */
    getTaskCompletionClassName(){
        var className = classes.TaskUncompleted;
        if(this.props.completed){
            className = classes.TaskCompleted;
        }
        return className;
    }

    render(){

    return (
    <div className={this.getTaskCompletionClassName()}>
            <p className={classes.content}> {this.props.content}</p>
        <button className={classes.buttonComplete} onClick={this.props.changeStateComplete} >Completado</button>
        <button className={classes.buttonDelete} onClick={this.props.deleteTask}>Eliminar Tarea</button>
      </div>
    );
  }
}
  export default Task;