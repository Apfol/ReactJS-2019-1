import React from 'react';
import classes from './PlaceDetailed.css';
import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

export default function PlaceDetailed(props) {
    return (
        <div>
            <Container className={classes.place}>
                <Row>
                    <Image src={props.place.img} className={classes.image} height="300" width="100%" />
                </Row>
                <Row>
                    <h2 className={classes.title}>{props.place["title"]}</h2>
                </Row>
                <Row>
                    <Col>
                        <p className={classes.detailedDescription}>{props.place["detailedDescription"]}</p>
                        <p style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Agrega tu experiencia en este sitio.</p>
                        <StarRatingComponent
                            className={classes.star}
                            name="rate1"
                            starCount={5}
                            value={props.place["score"]}
                        />
                        <h4 className={classes.comment}>Comentarios</h4>
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
    )
}

