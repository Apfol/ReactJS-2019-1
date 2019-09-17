import React, { Component } from 'react'
import classes from "./TodoItem.css";
export default class TodoItem extends Component {
    onDelete = (e)=>{
        this.props.deleteTodo(this.props.todo.title)
    }
    
    render() {

        return (
            <div className={classes.todo_item}>
                <p className={classes.todo_item_children}>{this.props.todo.title}</p>  
                <button className={classes.todo_item_children+" "+ classes.todo_delete}
                    onClick={this.onDelete}
                >X</button>      
                <hr></hr>
            </div>
        )
    }
}
