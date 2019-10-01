import React, {Component} from 'react';
import Cards from './Cards';
import card from './Card.css'
class Card extends Component{
    render(){
        return(
            <div className={card.body}>
            <h1 className={card.title}>Cursos</h1>
            <Cards></Cards>
            </div>
        )
    }
}
export default Card;