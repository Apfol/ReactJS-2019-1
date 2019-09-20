import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './PersonCard.css'

const PersonCard = (props) => {
    return (
        <div className={classes.personCard}>
            <Card bg="light" text="black" style={{ width: '18rem' }}>
                <Card.Header>{props.username}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.email}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}

export default PersonCard
