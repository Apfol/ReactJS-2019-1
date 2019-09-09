import React from 'react';
import shortid from 'shortid';
import classes from './Lista.css';
export default class Formulario extends React.Component {
    //Estado inicial del valor
    state={
        text:''
    }
    //Recibe el valor de la caja de texto
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    //Submit el formulario
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text:""
        });
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input className={classes.formulario} name="text" value={this.state.text} onChange={this.handleChange} placeholder="Tarea"></input>
                <button className={classes.input} onClick={this.handleChange}>añadir</button>
            </form>
        );
    }
}