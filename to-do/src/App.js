import React, {Component} from 'react';
import classes from './App.css';
import InputField from './components/InputField.js';
import TaskList from './components/TaskList.js';
import uuid from "uuid";
class App extends Component {
  state = {
    tasks: [],
    id: uuid(),
    task: "",
    isComplete: false
  }
  handleChange= e =>{
    this.setState({
      task: e.target.value
    });
  }
  handleSubmit= e=>{
    
    e.preventDefault();
    const newTask={
      id: this.state.id,
      task:this.state.task,
      isComplete:this.state.isComplete
    }

    const newList=[...this.state.tasks,newTask];
    
    this.setState({
      tasks: newList,
      task:"",
      id:uuid(),
      isComplete:false
    });
  
  }

  handleDelete= id =>{
    const filteredTasks = this.state.tasks.filter(task => task.id !== id);
    const selectedTask = this.state.tasks.find(task => task.id === id);
    
    this.setState({
      tasks: filteredTasks,
      id: id,
      task:"",
      isComplete: true
      });

  }


  render(){
  return (
    <div className={classes.App}>
      <header className={classes.title}>To-Do list</header>
      <InputField
          task={this.state.task}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          
        />
      <h2 className={classes.subtitle}> Remaining Tasks</h2>          
      <TaskList 
        tasks={this.state.tasks}
        clearAll={this.clearAll}
        handleComplete={this.handleComplete}
        handleDelete={this.handleDelete}
      />
    </div>
  );}
}

export default App;
