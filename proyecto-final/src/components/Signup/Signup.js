import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Spinner from '../../components/Spinner/Spinner';
import * as actionCreators from '../../store/actions/authentication';
import Error from '../../components/Error/Error';
import ButtonComponet from '../Button/ButtonComponent';
import classes from './Signup.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js';

class Signup extends Component {

    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        email: '',
        password: '',
        names: '',
        surnames: ''
    }

    componentDidUpdate() {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
        });
    }

    render() {
        return (
            <div>
                <div className={classes.container} >
                    <Form className={classes.form} >
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Nombres</Form.Label>
                                        <Form.Control type="text" placeholder="Nombres" onChange={(event) => { this.updateSignUpInfo(event, 'names') }} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control type="text" placeholder="Apellidos" onChange={(event) => { this.updateSignUpInfo(event, 'surnames') }} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Correo" onChange={(event) => { this.updateSignUpInfo(event, 'email') }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" onChange={(event) => { this.updateSignUpInfo(event, 'password') }} />
                            </Form.Group>
                            <br />
                        </Container>
                        {this.renderButtons()}
                        <br />
                        {this.renderError()}
                    </Form>
                </div>
            </div>
        )
    }

    renderButtons() {
        let buttons =
            <Row>
                <Col>
                    <Button variant="primary" onClick={this.submitSignUpForm} >
                        Registrarte
                    </Button>
                </Col>
            </Row>;
        if (this.props.loadingAuth) {
            buttons = <Spinner />;
        }

        return buttons;
    }

    renderError() {
        let error = <div />;
        if (this.props.isSignUpError) {
            error = <Error message="Datos erroneos." />
        }
        return error;
    }

    updateSignUpInfo = (event, type) => {
        var updatedLoginInfo = {
            ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
            email: updatedLoginInfo.email,
            password: updatedLoginInfo.password,
            names: updatedLoginInfo.names,
            surnames: updatedLoginInfo.surnames
        });
    }

    submitSignUpForm = () => {
        const userData = {
            email: this.state.email,
            password: this.state.password,
            displayName: this.state.names + " " + this.state.surnames,
        }

        this.props.onUserSignUp(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        isSignUpError: state.authenticationStore.isSignupError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignUp: (authData, onSuccessCallback) => dispatch(
            actionCreators.signUp(authData, onSuccessCallback)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
