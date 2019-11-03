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
        error: this.props.error,
    }

    componentDidUpdate () {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            error: nextState.error
        });
    }

    render () {
        if(this.state.error == true){
            var elements = document.getElementsByClassName("input");
            for(var i = 0 ; i < 2 ; i++){
                elements[i].style.backgroundColor = "red";
                elements[i].style.color = "white";
            }
        }
        return(
            <div className="login__form">
                <h1 style = {{textAlign: 'center'}}>Log in</h1>
                <div>
                    <p>Username:</p>
                    <input type="text" className = "input"
                        value={this.state.userName}
                        onChange={(event) => {this.updateLoginInfo(event, 'userName')}}
                    />
                    <p>Password:</p>
                    <input type="password" className = "input"
                        value={this.state.password}
                        onChange={(event) => {this.updateLoginInfo(event, 'password')}}
                    /><br/>
                    {this.renderButton()}
                </div>
            </div>
        );
    }  
    

    renderButton() {
        let button = <button onClick = {this.submitLoginForm}>Submit</button>;

        if (this.props.loadingAuth) {
            button = <Spinner />;
        }

        return button;
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
        error: state.authenticationStore.error,
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