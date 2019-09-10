import React, { Component } from 'react'
import classes from "./TodoItem.css"
export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props
        return (
            <li className={classes.listItem}>
                <h6 className={`${classes.inline} ${classes.title}`}>{title}</h6>
                <div className={`${classes.todoIcon} ${classes.inline}`} >
                    <span onClick={handleEdit}><i className={`fas fa-pencil-alt ${classes.icon}`}></i></span>
                    <span onClick={handleDelete}><i className={`fas fa-trash-alt ${classes.icon}`}></i></span>
                </div>
            </li>
        )
    }
}
