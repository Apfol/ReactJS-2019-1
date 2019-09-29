import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './TouristPlaceCard.css';
import StarRatingComponent from 'react-star-rating-component';

export default function TouristicPlaceCard(props) {
    return (
        <Card className={classes.card} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} height="150" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
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
