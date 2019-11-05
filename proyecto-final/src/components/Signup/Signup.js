import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Container, Row, Col } from 'react-bootstrap';
import Spinner from '../../components/Spinner/Spinner';
import * as actionCreators from '../../store/actions/authentication';
import Error from '../../components/Error/Error';
import ButtonComponet from '../Button/ButtonComponent';
import classes from './Signup.css';
import NavigationBar from '../NavigationBar/NavigationBar.js';

class Signup extends Component {

    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
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
                <NavigationBar/>
                <div className={classes.container} >
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
                    <ButtonComponet variant="primary" label="Registrarte" linkTo="./" />
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
            userName: updatedLoginInfo.userName,
            password: updatedLoginInfo.password
        });
    }

    submitSignUpForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password
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
