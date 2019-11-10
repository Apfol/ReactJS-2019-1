import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import * as actionCreators from '../../store/actions/';
import { connect } from 'react-redux';
import classes from './CommentForm.css';

export default class CommentForm extends Component {

    render() {
        return (
            <div>
                <Form className={classes.form} > 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Título del comentario</Form.Label>
                        <Form.Control placeholder="Introduce el título" value={this.props.newCommentInfo['title']} onChange={(event) => { this.props.updateCommentInfo(event, 'title') }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Experiencia</Form.Label>
                        <Form.Control style={{ paddingBottom: '100px', paddingTop: '20px' }} placeholder="Dinos cómo te pareció" value={this.props.newCommentInfo['body']} onChange={(event) => { this.props.updateCommentInfo(event, 'body') }} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.props.submitCommentForm} >
                        Comentar
                    </Button>
                </Form>
            </div>
        )
    }
}