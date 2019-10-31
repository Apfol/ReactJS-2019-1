import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignIn.css';

import Spinner from '../../components/Spinner/Spinner';

import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import * as actionCreators from '../../store/actions/';

class SignIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
    }

    componentDidUpdate () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            isUserLoggedIn: nextProps.isUserLoggedIn
        });
        if (nextProps.error !== '') {
            ToastsStore.error('Ups, there was an error: ' + nextProps.error);
            nextProps.onSaveError();
        }
    }

    render () {
        return (
            <div className="sign-in__form">
                <h1 style = {{textAlign: 'center'}}>Sign in</h1>
                <div>
                    <p>Username:</p>
                    <input type="text"
                        value={this.state.userName}
                        onChange={(event) => {this.updateSignInInfo(event, 'userName')}}
                    />
                    <p>Password:</p>
                    <input type="password"
                        value={this.state.password}
                        onChange={(event) => {this.updateSignInInfo(event, 'password')}}
                    /><br/>
                    {this.renderButton()}
                    <ToastsContainer position={ToastsContainerPosition.BOTTOM_LEFT} store={ToastsStore}/>
                </div>
            </div>
        );
    }

    renderButton() {
        let button = <button onClick = {this.submitSignInForm}>Submit</button>;

        if (this.props.loadingAuth) {
            button = <Spinner />;
        }

        return button;
    }

    updateSignInInfo = (event, type) => {
        var updatedLoginInfo = {
          ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
          userName: updatedLoginInfo.userName,
          password: updatedLoginInfo.password
        });
    }

    submitSignInForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password
        }

        this.props.onUserSignIn(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        error: state.authenticationStore.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignIn: (authData, onSuccessCallback) => dispatch(
            actionCreators.signIn(authData, onSuccessCallback)
        ),
        onSaveError: () => dispatch(actionCreators.saveError("")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);