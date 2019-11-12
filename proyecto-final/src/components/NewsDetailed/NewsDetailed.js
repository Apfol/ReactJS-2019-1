import React from 'react';
import classes from './NewsDetailed.css';
import { Row, Col, Container, Image } from 'react-bootstrap';


export default function NewsDetailed(props) {

    console.log(props.news);

    return (
        <div className={classes.newsDetailed}>
            <Container>
                <Row>
                    <Col md={5}>
                        <Image src={props.news.img} className={classes.image} height="300" width="100%" />
                    </Col>
                    <Col md={6} className="textos">
                        <p className={classes.title}>{props.news["title"]}</p>
                        <p className={classes.info}>{props.news["info"]}</p>
                    </Col>
                    <Col md={12}>
                        <p className={classes.fullInfo}>{props.news["fullInfo"]}</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )

}
