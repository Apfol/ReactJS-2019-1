import React, {Component} from 'react';
import classes from './TaskForm.css';
import uuid from 'uuid';

class TaskForm extends Component {
//State where its saving the content or text in the  input field
state = {
    text: ""
};

//Function to handle the change of the input field into the state
handleChange = (event) =>{
    this.setState({
        text : event.target.value
    });
};

/*Function to handle the event when it is submitting a new task, this task is generated with a uuid version 1 generator in the id, the text passed in the submit form and initially a task has a state of uncompleted
*/
handleSubmit = (event) =>{
    event.preventDefault();

    if(this.state.text!==""){
        this.props.submitTask({
            id: uuid.v1(),
            text : this.state.text,
            completed : false
        });

        this.setState({
            text: ""
        })
    }else{
        alert("ingrese porfavor texto");
    }

   
}

render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input
                className={classes.textField}
                value={this.state.text}
                placeholder= 'Añade una tarea a realizar'
                onChange = {this.handleChange}
            />
            <input className={classes.button} type="submit" value="Agregar Tarea" />
        </form>
    );
}

}

export default TaskForm;