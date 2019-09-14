import React, { Component } from 'react';
import classes from './Task.css';


class Task extends Component {

    constructor(props) {
        super();
        this.state = {
            text: props.ttext,
            checked: false,
            id: props.id
        };
    }



    deleteme = () => {
        this.props.deleteonclick(this);
    }

    resetTask = () => {
        let newText = "";
        this.setState({
            text: newText
        });
        //    alert("Nuevo texto: " + this.state.text);
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

    changeValue = () => {
        this.setState({
            text: document.getElementById(this.state.id).value
        });
    }

    render() {
        let decoration = classes.text;
        if (this.state.checked === true) {
            decoration = classes.text_checked;
        }
        // alert(this.state.text);
        return (
            <div className={classes.task}>
                <input type="checkbox" className={classes.check} onClick={this.finishTask} />
                <input type="text" id={this.state.id} className={decoration} value={this.state.text} onChange={this.changeValue} />
                <img className={classes.reset} src="../reset.svg" onClick={this.resetTask} alt="" />
                <img className={classes.delete} src="../delete.png" alt="" onClick={this.deleteme} />
            </div>
        );
    }
}

export default Task;