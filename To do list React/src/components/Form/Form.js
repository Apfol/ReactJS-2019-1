import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Form.css';

class TaskForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            task: ''
        }
        this.handleChange = this.handleChange.bind(this); 

    }

    handleChange(event){
        this.setState({
            task: event.target.value
        });
    }

    render(){
        return(
            <section>
                <label className={classes.taskLabel} htmlFor="taskInput">Task: </label>
                <input id="taskInput" className={classes.newTask} type="text"  placeholder="Insert your new task here" onChange={this.handleChange} />
                <Link to= {`/taskList`}>
                <button title="Save" className={classes.createTaskButton} value={this.state.task} onClick={this.createNewTask.bind(this)}>
                    Save
                </button>
                </Link>
            </section>
        )
    }

    createNewTask(event){
        var dataTask = this.state.task;
        this.props.addTask(dataTask);
    }
}

export default TaskForm;