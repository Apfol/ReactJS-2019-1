import React, {Component} from 'react';
import CardPreview from './CardPreview';
import cardSection from './CardSection.css';
class CardSection extends Component{
    render(){
        return(
            <div className={cardSection.body}>
            <h1 className={cardSection.title}>Creativos que pueden interesarte</h1>
            <CardPreview></CardPreview>
            </div>
        )
    }
}
export default CardSection;