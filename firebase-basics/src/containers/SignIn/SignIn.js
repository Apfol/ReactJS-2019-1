import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SignIn.css';

import * as actionCreators from '../../store/actions/';

class SignIn extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: '',
        password: ''
    }

    componentWillMount () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
        });
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
                    <button onClick = {this.submitSignInForm}>Submit</button>
                </div>
            </div>
        );
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
        this.props.onUserSignIn(this.state.userName);
        this.props.history.push('/');
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignIn: (userName) => dispatch(actionCreators.signIn(userName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);