import React, { Component } from 'react';
import list from './TodoList.css';
//ONSUBMIT adds an event when pressing the button
class TodoList extends Component{
    componentDidUpdate() {
        this.props.inputElement.current.focus()
      }
      render() {
        return (
          <div className={list.main}>
            <div className="header">
              <form onSubmit={this.props.addItem}>
                <input
                  placeholder="Escribe un Tarea"
                  ref={this.props.inputElement}
                  value={this.props.currentItem.text}
                  onChange={this.props.handleInput}
                  //className={List}
                />
                <button type="submit"> Agregar </button>
              </form>
            </div>
          </div>
        )
      }
    }

export default TodoList;