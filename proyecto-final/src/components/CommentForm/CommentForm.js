import { Form, Button } from 'react-bootstrap';
import React, { Component } from 'react';

export default class CommentForm extends Component {
    render() {
        return (
            <div>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Introduce tu nombre" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Experiencia</Form.Label>
                    <Form.Control placeholder="Dinos cómo te pareció" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Comentar
                </Button>
            </Form>
            </div>
        )
    }
}
