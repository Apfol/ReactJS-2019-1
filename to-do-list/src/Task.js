import React, { Component } from 'react';
import classes from './Task.css';


class Task extends Component {

    state = {
        text: this.props.ttext,
        checked: false
    };



    deleteme = () => {
        this.props.deleteonclick(this);
    }

    resetTask = () => {
        let newText = "";
        this.setState({
            text: newText
        });
        alert(this.state.text);
    }

    finishTask = () => {
        let check = false;
        if (this.state.checked === false) {
            check = true;
        }
        this.setState(
            {
                checked: check
            });
    }

    render() {
        let decoration = classes.text;
        if (this.state.checked === true) {
            decoration = classes.text_checked;
        }
        return (
            <div className={classes.task} >
                <input type="checkbox" className={classes.check} onClick={this.finishTask} />
                <input type="text" className={decoration} defaultValue={this.state.text} />
                <p className={classes.duedate}>{this.props.duedate}</p>
                <img className={classes.reset} src="../reset.svg" onClick={this.resetTask} alt="" />
                <img className={classes.delete} src="../delete.png" alt="" onClick={this.deleteme} />
            </div>
        );
    }
}

export default Task;