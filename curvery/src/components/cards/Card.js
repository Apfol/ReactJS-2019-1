import React, {Component} from 'react';
import Cards from './Cards';
import './Card.css'
class Card extends Component{
    render(){
        return(
            <div className="CardSection">
            <h1 className="title_CardSection">Cursos que pueden interesarte</h1>
            </div>
        )
    }
}
export default Card;