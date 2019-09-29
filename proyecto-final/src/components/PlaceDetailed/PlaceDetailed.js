import React from 'react';
import classes from './PlaceDetailed.css';
import { Card, Row, Col, Container } from 'react-bootstrap';

export default function PlaceDetailed(props) {
    return (
        <div className={classes.placeDetailed}>
            <div>
                <h1 className={classes.title}>{props.place["title"]}</h1>
                <h3>{props.place["detailedDescription"]}</h3>
                {props.place["comments"].map(comment => {
                    return (
                        <Card className={classes.card} border="dark" style={{ width: '50rem' }}>
                            <Card.Header>{comment.author}</Card.Header>
                            <Card.Body>
                                <Card.Title>Buen lugar de estudio</Card.Title>
                                <Card.Text>
                                    {comment.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

