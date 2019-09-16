import React from 'react';
import './AddList.css'
import classes from './AddList.css';

class AddList extends React.Component{        
   
    constructor(props){
        super(props);
        this.state = {
            taskText: ''
        };
    }

    handleChange = (event) =>{
        this.setState({taskText: event.target.value})
    }

    handleSubmit = (event) =>{
        var id = parseInt(Math.random() * (1000 - 1) + 1)
        
        event.preventDefault();
        this.props.onSubmit({
            id: id,
            taskText: this.state.taskText,
            taskCompleted: false
        });
        this.setState({
            taskText:""
        });
    }

    render(){
        return(
            <div>
                <form className={classes.formAll} onSubmit={this.handleSubmit}>
                    <input name="taskText " className={classes.inputText} value={this.state.taskText} onChange={this.handleChange}></input>                    
                    <button onClick={this.handleSubmit.bind(this)} className={classes.button}>Add to list</button>
                </form> 
            </div>
        );
    }
}

export default AddList;