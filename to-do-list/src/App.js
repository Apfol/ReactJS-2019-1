import React, { Component } from 'react';
import List from './List';
import './App.css';
import Task from './Task';

class App extends Component {

  state = {
    tasks: [], counter: 0
  };
  counter = 0;

  appendTask = () => {
    let newState = this.state;
    this.counter += 1;
    newState.tasks.push(<Task id={"task" + this.counter} ttext={document.getElementById("text_task").value} deleteonclick={this.deleteTask} />);
    this.setState({
      tasks: newState.tasks,
      counter: this.counter
    });
    console.log(this.state.tasks);
  }

  deleteTask = (tasktodelete) => {

    let newState = this.state;
    for (var i = 0; i < this.state.tasks.length; i++) {
      if (tasktodelete.props.id === this.state.tasks[i].props.id) {

        alert("indice de la tarea: " + i);
        newState.tasks.splice(i, 1);
        console.log(newState.tasks);
        break;
      }
    }
    /* let newtasks = [];
     if (this.state.tasks.length > 1) {
       newtasks = this.state.tasks.filter((task) => task.props.id !== tasktodelete.props.id);
     }*/
    this.setState(newState);
    console.log(this.state.tasks);
  }


  render() {
    return (
      <>
        <List tasks={this.state.tasks} addonclick={this.appendTask} />
      </>
    );
  }
}

export default App;
