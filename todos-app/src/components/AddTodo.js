import React, { Component } from 'react'
import classes from './AddTodo.css';

export default class AddTodo extends Component {
    state = {
        title : ""
    }

    onChange = e=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e=>{
        e.preventDefault();
        this.props.addTodo({title: this.state.title});
        this.setState({
            title: ""
        });
    }
    render() {
        return (
            <div className={classes.addTodo}>
                <form onSubmit={this.onSubmit}>
                    <input className={classes.input}
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.onChange}
                    placeholder="todo task..."
                    ></input>

                    <input className={classes.btnAdd}
                    type="submit"
                    value="Add"
                    >
                    </input>
                </form>
            </div>
        )
    }
}
