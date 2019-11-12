import classes from './PlaceDetailed.css';
import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

import React from 'react';

const PlaceDetailed = (props) => {
    return (
        <div>
            <Container className={classes.place} fluid>
                <Row className={classes.image} style={{ backgroundImage: "url(" + props.place.img + ")" }} />
                <Row className={classes.titleC}>
                    <h2 className={classes.title}>{props.place["title"]}</h2>
                </Row>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4} className={classes.starC}>
                        <StarRatingComponent
                            className={classes.star}
                            name="rate1"
                            starCount={5}
                            value={props.place["score"]}
                        />
                    </Col>
                    <Col sm={4}></Col>
                </Row>
                <Row className={classes.content}>
                    <Col sm={12}>
                        <p className={classes.detailedDescription}>{props.place["detailedDescription"]}</p>
                    </Col>
                    <Col>
                        <p style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>Comentarios</p>
                        <div className={classes.comments}>
                            {Object.values(props.place["comments"]).map(comment => {
                                return (
                                    <Card className={classes.card} >
                                        <Card.Header>{comment.author}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{comment.title}</Card.Title>
                                            <Card.Text>
                                                {comment.body}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceDetailed;

