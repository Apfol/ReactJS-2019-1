import appClasses from './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import React, { Component } from 'react'



export default class App extends Component {
  contador = 0;
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {title:"Todo 1", key:"1"},
        {title:"Todo 2", key:"2"}
      ]
    };
  
  }

  deleteTodo = (todoTitle)=>{
    let newTodos = this.state.todos.filter(todo=>todo.title !== todoTitle);
    this.setState({
      todos: newTodos
    });

  }

  addTodo = (todo)=>{
    console.log(todo.title);
    todo.key = this.contador;
    this.contador ++;
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }
  render() {
    return (
      
      <div className="App">
        <header className={appClasses.App_header}>
          <p>
            Todos App
          </p>
        </header>
        <div className={appClasses.container}>
          <AddTodo addTodo={this.addTodo}></AddTodo>  
        </div>
        <div className={appClasses.container}>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} addTodo={this.addTodo}></Todos>
        </div>
  
        <footer className={appClasses.footer}>
  
        </footer>
  
      </div>
    );
  
  }
}
