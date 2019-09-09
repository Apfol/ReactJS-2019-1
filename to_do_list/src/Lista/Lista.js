import React from 'react';
import Formulario from './Formulario';
import Elemento from './Elemento';
import classes from './Lista.css';

export default class Lista extends React.Component {

    state = {
        elements: []
    };

    addElement = (element) =>{
        this.setState({
            elements: [element, ...this.state.elements]
        })
    }

    toggleComplete = (id) =>{
        this.setState({
            elements: this.state.elements.map(element =>{
                if(element.id === id){
                    //Actulizar el estado
                    return{
                        ...element,
                        //id: element.id,
                        //text: element.text,
                        complete: !element.complete
                    };
                } else{
                    return element;

                }
            })
        });
    };

    handleDelete = (id) =>{
        this.setState({
            elements: this.state.elements.filter(element => element.id !== id)
        });
    };

    render(){
        return(
            <div> 
                <Formulario onSubmit={this.addElement} /> 
                {this.state.elements.map(element => (<Elemento key={element.id} toggleComplete={() =>this.toggleComplete(element.id)} deleteElement={() => this.handleDelete(element.id)} element={element}/>))}                
            </div>
        );
    }
}