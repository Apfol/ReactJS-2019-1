import React, { Component } from 'react';
import classes from './List.css';
import Task from './Task';

class List extends Component {
    constructor(props) {
        super();
        this.state = {
            tasks: [], counter: 0
        };
        this.counter = 0;
    }

    appendTask = () => {
        let newState = {
            ...this.state
        };
        this.counter += 1;
        newState.tasks.push(<Task key={"task" + this.counter} id={"task" + this.counter} ttext={document.getElementById("text_task").value} deleteonclick={this.deleteTask} />);
        this.setState({
            tasks: newState.tasks,
            counter: this.counter
        });
    }

    deleteTask = (tasktodelete) => {

        let newState = {
            ...this.state
        };

        for (var i = 0; i < this.state.tasks.length; i++) {
            if (tasktodelete.state.id === this.state.tasks[i].props.id) {
                // alert("indice de la tarea: " + i);
                newState.tasks.splice(i, 1);
                // alert("tareas Eliminadas " + tasksRemoved.length);
                // alert("newTasks " + this.nombreTareas(newState.tasks));
                break;
            }
        }
        /*if (this.state.tasks.length > 1) {
          newtasks = this.state.tasks.filter((task) => task.props.id !== tasktodelete.state.id);
        }*/
        this.setState(newState);

    }

    componentDidUpdate() {
        // alert("tareas finales en el didupdate" + this.nombreTareas(this.state.tasks));
    }

    nombreTareas(tareas) {
        let nombres = "Nombres: ";
        tareas.forEach(tarea => {
            nombres += tarea.props.ttext + ", ";
        });
        return nombres;
    }

    render() {
        // alert("tareas en el render de list " + this.nombreTareas(this.state.tasks));
        return (
            <div className={classes.list}>
                <h1 className={classes.heading}>Lista de Tareas</h1>
                <div className={classes.form}>
                    <input type="text" id="text_task" placeholder="Escribe la tarea para hacer" />
                    <button onClick={this.appendTask}>Añadir</button>
                </div>
                <div>
                    {this.state.tasks}
                </div>
            </div>

        );
    }
}


export default List;