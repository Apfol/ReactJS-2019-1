import React from 'react';
import classes from './PlaceDetailed.css';
import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import CommentForm from '../CommentForm/CommentForm';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../../components/Footer/Footer.js';

export default function PlaceDetailed(props) {
    return (
        <div>
            <NavigationBar/>
            <Container className={classes.place}>
                <Row>
                    <Image src={props.place.img} height="300" width="100%" />
                </Row>
                <Row>
                    <h2 className={classes.title}>{props.place["title"]}</h2>
                </Row>
                <Row>
                    <Col>
                        <p className={classes.detailedDescription}>{props.place["detailedDescription"]}</p>
                        <p style={{fontSize : "20px", fontWeight: "bold", textAlign: "center", marginTop: "10%"}}>Agrega tu experiencia en este sitio.</p>
                        <CommentForm></CommentForm>
                    </Col>
                    <Col>
                        <StarRatingComponent
                            className={classes.star}
                            name="rate1"
                            starCount={5}
                            value={props.place["score"]}
                        />
                        <h4 className={classes.comment}>Comentarios</h4>
                        {props.place["comments"].map(comment => {
                            return (
                                <Card className={classes.card} >
                                    <Card.Header>{comment.author}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Buen lugar</Card.Title>
                                        <Card.Text>
                                            {comment.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>

    )
}

