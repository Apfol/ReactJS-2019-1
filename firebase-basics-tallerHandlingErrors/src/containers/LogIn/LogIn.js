import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LogIn.css';

import Spinner from '../../components/Spinner/Spinner';

import * as actionCreators from '../../store/actions/';


class LogIn extends Component {

    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: '',
        authenticationError: this.props.authenticationError
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
            <div className="login__form">
                <h1 style={{ textAlign: 'center' }}>Log in</h1>
                <div>
                    <p>Username:</p>
                    <input type="text"
                        value={this.state.userName}
                        onChange={(event) => { this.updateLoginInfo(event, 'userName') }}
                    />
                    <p>Password:</p>
                    <input type="password"
                        value={this.state.password}
                        onChange={(event) => { this.updateLoginInfo(event, 'password') }}
                    /><br />
                    {this.renderButton()}
                    {this.renderlogInError()}
                </div>
            </div>
        );
    }

    renderButton() {
        let button = <button onClick={this.submitLoginForm}>Submit</button>;

        if (this.props.loadingAuth) {
            button = <Spinner />;
        }

        return button;
    }

    renderlogInError() {

        let errorMessage;

        if (!this.validateEmail(this.state.userName) && this.props.authenticationError) {
            errorMessage = <p>Error, esta escribiendo el usuario sin ser correo electronico</p>
        }


        if (this.validateEmail(this.state.userName) && this.props.authenticationError) {
            errorMessage = <p>Error, puede que el usuario aun no esta creado</p>
        }

        return errorMessage;

    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
        authenticationError: state.authenticationStore.authenticationError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(
            actionCreators.logIn(authData, onSuccessCallback)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);