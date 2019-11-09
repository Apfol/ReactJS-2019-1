import React, {Component} from 'react';
import CardPreview from './CardPreview';
import './CardSection.css';
class CardSection extends Component{
    render(){
        return(
            <div className="body_CardSection">
            <h1 className="title_CardSection">Cursos que pueden interesarte</h1>
            <CardPreview></CardPreview>
            </div>
        )
    }
}
export default CardSection;