import React, {Component} from 'react';
import TaskForm from '../TaskForm/TaskForm';
import Task from '../Task/Task'


class TaskList extends Component {


  //State where its saving the tasks
  state = {
    tasks: [
    ]
  }


  //Function to create a new task
  createTask = (task) =>{
      const newTasks = [task ,...this.state.tasks];
    this.setState({
        tasks: newTasks 
    });
  }

  /*Function to change the taskt from uncompleted to uncompleted. This copy the tasks from the previous state and only change the attribute completed, when the id as parameter is the same as in the array of tasks in state
  */
  changeStateComplete = (id) =>{
      this.setState({
        tasks : this.state.tasks.map(task =>{
          if(task.id === id){
            return {
              id: task.id,
              text: task.text,
              completed : !task.completed
            }
          }else{
            return task;
          }
        })
      });
  };

  /* Delete a task given its id as a parameter. Refresh the state by filtering all the task listed except when one of them has the same id as parameter
  */
  handleDeleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  render(){
    return (
      <div>
        <TaskForm submitTask={this.createTask}/>
    {/* JSON.stringify(this.state.tasks) */}
        {this.state.tasks.map(task => (
          //Create component Task with 2 props as values, and 2 props as functions with return values
            <Task completed={task.completed} changeStateComplete={()=> this.changeStateComplete(task.id)} content={task.text} deleteTask={() => this.handleDeleteTask(task.id)}/>
        ))}
    </div>
  );
  }

  
}

export default TaskList;
