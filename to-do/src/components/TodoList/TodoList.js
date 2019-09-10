import React, { Component } from 'react';
import TodoItem from "../TodoItem/TodoItem";
import classes from './TodoList.css'
export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props
        var content = items.map(item => {
            return (
                <TodoItem
                    key={item.id}
                    title={item.title}
                    handleDelete={() => { handleDelete(item.id) }}
                    handleEdit={() => { handleEdit(item.id) }}
                />)
                ;
        });
        return (
            <div className={classes.block}>
                <ul>
                    {content}
                </ul>
                <button className={classes.button} onClick={clearList}>Limpiar lista</button>
            </div>
        )
    }
}
