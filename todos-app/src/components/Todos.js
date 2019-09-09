import TodoItem from "./TodoItem";

import React, { Component } from 'react'

export default class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.key}
        todo={todo}
        deleteTodo={this.props.deleteTodo}
      ></TodoItem>
    ));
  }
}
