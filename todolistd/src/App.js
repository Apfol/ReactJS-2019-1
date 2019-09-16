import React from 'react';
import AddList from './AddList';
import ToDoList from './ToDoList';
import classes from './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      task:[]
    };
  }

  addToDo = (ToDo) =>{
    this.setState({
      task: [...this.state.task, ToDo]
    });
  }

  taskCompleted = (id) => {
    this.setState({
      task:this.state.task.map(ToDo => {
        if (ToDo.id === id) {
          return{
            id: ToDo.id,
            taskText: ToDo.taskText,
            taskCompleted: !ToDo.taskCompleted
          };
        }else{
          return ToDo;
        }
      })
    })
  }

  deleteTask = (id) => {
    this.setState({
      task: this.state.task.filter(ToDo => ToDo.id !== id)
    })
  }

  render(){
      return (
        <BrowserRouter>
        
        <div className={classes.all}>
          <p className={classes.p1}><Link to="/add-task">Add Task</Link></p>
          <p className={classes.p2}><Link to="/task-list">Show task list</Link></p>
        </div>     
          <h1 className={classes.title}>To Do List</h1>
            
            <Route path="/add-task" render = {() => (
              <div className={classes.all}>
                <AddList onSubmit={this.addToDo} className="addList"/>
                {JSON.stringify(this.state.task)}
              </div>
            )}/> 
              
            <Route path="/task-list" exact render = {() =>(
              <div className={classes.all}>
                <div className={classes.taskToDo}>
                    Tasks completed: {this.state.task.filter(ToDo => ToDo.taskCompleted).length}
                  </div>
                  {this.state.task.map(ToDo => (
                    <ToDoList key={ToDo.id + 1} 
                              taskCompleted={() => this.taskCompleted(ToDo.id)}                        
                              ToDo={ToDo}
                              deleteTask={() => this.deleteTask(ToDo.id)}/>
                    ))}
              </div> 
            )}/>                          
        </BrowserRouter>
      );
  }
}

export default App;