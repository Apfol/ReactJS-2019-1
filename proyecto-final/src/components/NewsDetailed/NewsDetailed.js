import React from 'react';
import classes from './NewsDetailed.css';
import { Row, Col, Container, Image } from 'react-bootstrap';


export default function NewsDetailed(props){

    return(

        <div className={classes.NewsDetailed}>
            <Container>
                <Row>
                    <Col md={5}>
                        <Image src={props.Image} className={classes.Image} />
                    </Col>
                    <Col md={6}>
                        <p className={classes.title}>{props.title}</p>
                        <p className={classes.info}>{props.info}</p>
                    </Col>
                    <Col md={12}>
                        <p className={classes.fullInfo}>{props.fullInfo}</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )

}
