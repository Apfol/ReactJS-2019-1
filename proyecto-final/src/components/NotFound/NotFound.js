import React from 'react';
import classes from './NotFound.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col md="12" >
                    <div class={classes.template}>
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <br/>
                        <Link to="/" >
                            <Button variant="primary">Go Home</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;