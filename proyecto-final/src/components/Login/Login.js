import classes from './Login.css';
import React, { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import * as actionCreators from '../../store/actions/authentication';
import { connect } from 'react-redux';
import image from './assets/man.png'
import ButtonComponet from '../Button/ButtonComponent';

class Login extends Component {

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
            <div className={classes.logInContainer}>
                <div className={classes.imgContainer}>
                    <img className={classes.img} src={image}></img>
                </div>
                <div className={classes.container} >
                    <Form className={classes.form} >
                        <Container>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Correo" />
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
        );
    }

    renderButtons() {
        let buttons =
            <Row>
                <Col>
                    <ButtonComponet variant="primary" linkTo="./" label="Iniciar sesión" />
                </Col>
                <Col>
                    <ButtonComponet variant="outline-primary" linkTo="./signup" label="Registrarte" />
                </Col>
            </Row>;
        if (this.props.loadingAuth) {
            buttons = <Spinner />;
        }
        return buttons;
    }

    renderError() {
        let error = <div />;
        if (this.props.isLoginError) {
            error = <Error message="Datos erroneos." />
        }
        return error;
    }

    updateLoginInfo = (event, type) => {
        var updatedLoginInfo = {
            ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
            userName: updatedLoginInfo.userName,
            password: updatedLoginInfo.password
        });
    }

    submitLoginForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password
        }

        this.props.onUserLogin(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        isLoginError: state.authenticationStore.isLoginError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(
            actionCreators.logIn(authData, onSuccessCallback)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
