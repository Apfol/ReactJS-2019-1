import React from 'react';
import classes from './App.css';
import Listcomponent from '../List/List';
import TaskForm from '../Form/Form';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

var HeaderComponent = () =>{
  return(
    <header className={classes.header}>
        <h1>My React To Do List</h1>
    </header>
  )  
}

class CounterTitleComponent extends React.Component {

  constructor(props){
    super(props)
    this.getPendingTasksCount = this.getPendingTasksCount.bind(this);
  }

  render(){
    return(
      <h3>You have {this.getPendingTasksCount()} pending tasks</h3>
    ) 
  }

  getPendingTasksCount = () =>{
    return this.props.taskList.filter(task => task.done === false).length;
  } 
   
}

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          taskList: [
              {
                  description: "dataTask",
                  done: false
              }
          ]
      }      
  }

  render(){
    return ( 
      <BrowserRouter>
        <div className={classes.App}>
        <HeaderComponent/>
        <Link className={classes.listLink} to= {`/taskList`} title="Task list" ></Link>
        <Link className={classes.formLink} to= {`/taskForm`} title="Add task" ></Link>
        <CounterTitleComponent taskList = {this.state.taskList}  />
        <main>
          <Route path="/taskList" render={() => <Listcomponent taskList={this.state.taskList} checkChange={this.checkChange} />} />
          <Route path='/taskForm'  render={() => <TaskForm addTask={this.addTask} />} />
        </main>
        </div>
      </BrowserRouter>
      
    );
  }

  addTask = (description) => {
    var task = {
        description,
        done: false
    }
    this.setState({
        taskList: this.state.taskList.concat(task)
    })
  }

  checkChange = (taskIndex) =>{
    var newList = this.state.taskList.map((task,index)=>{
      if (taskIndex === index) {
        task.done = !task.done;
      }
      return task;
    })
    this.setState({
        taskList: newList
    })
  }
}

export default App;
