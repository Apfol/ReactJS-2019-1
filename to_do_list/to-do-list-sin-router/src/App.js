import React, {Component} from 'react';
import classes from './App.css';
import Task from './Task';

class App extends Component{
  constructor(props) {
    super(props)
    
    this.textInput = React.createRef();
  }
  
  state = {
    tasks: [
      {id:0,task: 'Ir a La Bombonera a ver un Boca vs River'},
      {id:1,task: 'Ir a el Camp Nou a ver un Barcelona vs Real Madrid'}
    ]
  }

  render() {
    return (
      <div>
        <h1 className={classes.title}>TO DO LIST</h1>
        <div className={classes.all}>
        <input className={classes.text} type="text" ref={this.textInput}></input>
        <button className={classes.add} onClick = {this.changeState}>Add</button>
          <div className={classes.list}>
            {this.state.tasks.map(t => <Task delete={this.deleteTask} id={t.id} task={t}/>)}
          </div>
        </div>
      </div>
    )
  }

  changeState= () => {
    const newTask = [
      {id:(this.state.tasks.length+1),task: this.textInput.current.value}
    ]

    const help = this.state.tasks.concat(newTask)

    this.setState(
      {tasks : help},
      console.log(this.state))
  }

  deleteTask = (task) => {
    var index = this.state.tasks.indexOf(task);
    this.state.tasks.splice(index, 1)
    this.setState({
      tasks: this.state.tasks
    })
  }
}

export default App;