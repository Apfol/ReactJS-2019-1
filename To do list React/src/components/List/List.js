import React from 'react';
import classes from './List.css';

class Listcomponent extends React.Component{

    render(){
      return(
        <ul className={classes.task_list}>
          {this.props.taskList.map((task,index) => <Task key={index} index={index} checkChange={this.props.checkChange} data={task}/> )}
        </ul>
      )
    }
  }
  
class Task extends React.Component{

    constructor(){
      super();

      this.onChange = this.onChange.bind(this);
      this.getClassName = this.getClassName.bind(this);
    }

    render(){
        var task = this.props.data;
        var idTask = "task" + task.description;

        var dynamicClassName = this.getClassName(task);
        return(
        <li className={classes[dynamicClassName]} >
            <input type="checkbox" id={idTask} onChange={this.onChange.bind(this)} checked={task.done} ></input>
            <label htmlFor={idTask} >{task.description}</label>
        </li>
        )
    }

    getClassName = (task) => (task.done) ?  "done_task" : "pending_task";

    onChange(){
      this.props.checkChange(this.props.index);
    }
}

export default Listcomponent;