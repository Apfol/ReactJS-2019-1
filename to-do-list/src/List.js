import React, { Component } from 'react';
import classes from './List.css';

class List extends Component {
    state = {
        tasks: this.props.tasks
    }

    render() {
        return (
            <div className={classes.list}>
                <h1 className={classes.heading}>Lista de Tareas</h1>
                <input type="text" id="text_task" className={this.props.ttext} placeholder="Escribe la tarea para hacer" />
                <button className={this.props.lbutton} onClick={this.props.addonclick}>Añadir</button>
                <div>
                    {this.props.tasks}
                </div>
            </div>

        );
    }
}


export default List;