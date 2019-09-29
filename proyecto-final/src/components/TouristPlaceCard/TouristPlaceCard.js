import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import classes from './TouristPlaceCard.css';
import StarRatingComponent from 'react-star-rating-component';

export default class TouristPlaceCard extends Component {
    render() {
        return (
            <Card className={classes.card} style={{ width: '18rem' }} onClick={this.onClick}>
                <Card.Img variant="top" src={this.props.img} height="150" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={3}
                    />
                </Card.Body>
            </Card>
        )
    }
    onClick = () => {
        this.props.handleClick(this.props.id)
    }
}


