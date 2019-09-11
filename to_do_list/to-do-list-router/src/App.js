import React, {Component} from 'react';
import classes from './App.css';
import Task from './Task/Task.js';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Add from './Add/Add.js';
import lista from './lista.png';
import agregar from './agregar.png';

class App extends Component{
  constructor(props) {
    super(props)
    
    // Create the ref
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
        <BrowserRouter>
          <div className={classes.all}>
            <ul>
              <li>
                <Link to="/">
                  <img className={classes.add} src={lista} alt="lists-tasks"></img>
                </Link>
              </li>
              <li>
                <Link to="/add">
                  <img src={agregar} alt="add-task"></img>
                </Link>
              </li>
            </ul>
         

            <Route path = "/add" exact render = {() =>(
              <Add changeState={this.changeState} textInput={this.textInput}></Add>
            )}/>

            <Route path = "/" exact render = {() =>(
              <div className={classes.list}>
                {this.state.tasks.map(t => <Task delete={this.deleteTask} id={t.id} task={t}/>)}
              </div>
            )}/>

          
          </div>
        </BrowserRouter>
      </div>
    )
  }

  changeState= () => {
    if(this.textInput.current.value!=="")
    {
      const newTask = [
        {id:(this.state.tasks.length+1),task: this.textInput.current.value}
      ]

      const help = this.state.tasks.concat(newTask);

      this.setState({tasks : help});

      alert("Task added");
    }
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