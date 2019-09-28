import React from 'react';
import "./SliderCard.css";

class SliderCard extends React.Component {
    render = () => {
        return (
            <div className="slideCard">
                <h3>{this.props.title}</h3>
                <p>{this.props.p}</p>
            </div>
        );
    };
}

export default SliderCard;