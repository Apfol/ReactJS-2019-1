import { Form, Button } from 'react-bootstrap';
import React from 'react';
import classes from './CommentForm.css';

const CommentForm = (props) => {
    return (
        <div>
            <div>
                <Form className={classes.form} >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Título del comentario</Form.Label>
                        <Form.Control placeholder="Introduce el título" value={props.newCommentInfo['title']} onChange={(event) => { props.updateCommentInfo(event, 'title') }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Experiencia</Form.Label>
                        <Form.Control style={{ paddingBottom: '100px', paddingTop: '20px' }} placeholder="Dinos cómo te pareció" value={props.newCommentInfo['body']} onChange={(event) => { this.props.updateCommentInfo(event, 'body') }} />
                    </Form.Group>
                    <Button variant="primary" onClick={props.submitCommentForm} >
                        Comentar
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CommentForm;