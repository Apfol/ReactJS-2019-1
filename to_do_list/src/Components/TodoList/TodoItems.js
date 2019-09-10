import React, { Component } from 'react';
import itemz from './TodoItems.css';

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} className={itemz.listo} onClick={() => this.props.deleteItem(item.key)}>
        <div className={itemz.iconContainer}><div className={itemz.icon}></div></div><div className={itemz.item}>{item.text}</div> 
      </li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <div className={itemz.container}>
    <ul className={itemz.theList}>{listItems}</ul>
    </div>
  }
}

export default TodoItems;