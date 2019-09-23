import React from 'react';
import Card from './card.js';

var Cards = (props) => {
    return(
        <section className = "cards">
        {props.cards.map((card, cardIndex) => {
            return (
                <Card                    
                    card = {card}
                    cardIndex = {cardIndex}
                    key = {cardIndex}
                />
            )
        })}
    </section>
    );
}

export default Cards;