import React from 'react';
import AddList from './AddList';
import ToDoList from './ToDoList';
import classes from './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      task:[]
    };
  }

  addToDo = (ToDo) =>{
    this.setState({
      task: [ToDo, ...this.state.task]
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
          <div className={classes.all}>            
            <h1 className={classes.title}>To Do List</h1>
            <div className={classes.taskToDo}>
              Tasks completed: {this.state.task.filter(ToDo => ToDo.taskCompleted).length}
            </div>
            <AddList onSubmit={this.addToDo} className="addList"/>
            {this.state.task.map(ToDo => (
              <ToDoList key={ToDo.id} 
                        taskCompleted={() => this.taskCompleted(ToDo.id)}                        
                        ToDo={ToDo}
                        deleteTask={() => this.deleteTask(ToDo.id)}/>
              ))}                              
          </div>
      );
  }
}

export default App;