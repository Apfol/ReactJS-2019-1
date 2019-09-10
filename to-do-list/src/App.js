import React, { Component } from 'react';
import List from './List';
import './App.css';
import Task from './Task';

class App extends Component {

  state = {
    tasks: []
  };


  appendTask = () => {
    let newState = this.state;
    newState.tasks.push(<Task ttext={document.getElementById("text_task").value} deleteonclick={this.deleteTask.bind(this)} />);
    this.setState(newState);
  }

  deleteTask(tasktodelete) {
    let index;
    for (var i = 0; i < this.state.tasks.length; i++) {
      if (tasktodelete.props.ttext === this.state.tasks[i]) {
        index = i;
        break;
      }
    }
    let newtasks = this.state.tasks;
    newtasks.splice(index, 1);
    console.log(this.state.tasks);
    this.setState({
      tasks: newtasks
    });

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
