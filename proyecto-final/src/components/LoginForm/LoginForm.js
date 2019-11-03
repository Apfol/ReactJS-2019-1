import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import classes from './LoginForm.css'

export default function LoginForm() {
    return (
        <Form className={classes.form} >
            <Container>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Correo" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            Iniciar sesión
                        </Button>
                    </Col>
                        <Button variant="outline-primary" type="submit">
                            Registrarte
                        </Button>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}