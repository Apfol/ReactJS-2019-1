import React, { Component } from 'react';
import logo1 from '.././../assets/images/koioc_tittle.png';
import logo2 from '.././../assets/images/logoceo.png';
import classes from'./login.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/Spinner/Spinner';
import {notify} from 'react-notify-toast';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: ''
        }
    }

    handleUserChange = (event) =>{
        this.setState({
          user: event.target.value
        });
    }
  
    handlePasswordChange = (event) =>{
        this.setState({
            password: event.target.value
        });
    }

    componentDidUpdate () {
        if (this.props.isUserLoggedIn) {
            this.props.history.push('/home');
        }
    }

    componentWillReceiveProps = (nextProps) =>{
        if (nextProps.error !== '') {
            notify.show(nextProps.error, "error", 5000);
            nextProps.onSaveError();
        }
    }

    render(){      
        return(
            <div className={classes.all}>
                <div className={classes.border}> 
                    <div className={classes.logo}>
                        <img className={classes.logo1} src={logo1} alt="logo1-app"></img>
                        <img className={classes.logo2} src={logo2} alt="logo2-app"></img>
                    </div>
                    <input 
                        title="User" 
                        onChange={this.handleUserChange} 
                        type="email" 
                        placeholder="Enter email"
                        className={classes.user}
                    />
                    <input
                        title="Password" 
                        onChange={this.handlePasswordChange} 
                        type="password" 
                        placeholder="Password"
                        className={classes.password}
                    />
                    {this.renderButton()}
                    <div className={classes.loginSep}>
                        <span className={classes.separator}>or</span>
                    </div>
                    <Link to = {"/signUp"}>
                        <button className={classes.signUp}>Sign up</button>
                    </Link>
                </div>
            </div>
        )
    }

    renderButton() {
        let button = <button onClick = {this.login} className={classes.login}>Log In</button>;

        if (this.props.loadingAuth) {
            button = <Spinner />;
        }

        return button;
    }

    login = () => {
        var email = this.state.user;
        var password = this.state.password;
        
        this.props.onUserLogin(email, password,() => {
            this.props.history.push('/home');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        error: state.authenticationStore.error,
        loadingAuth: state.authenticationStore.loadingAuth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (email,password,onSuccessCallback) => dispatch(
            actionCreators.logIn(email,password,onSuccessCallback)
        ),
        onSaveError: () => dispatch(actionCreators.saveError("")),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);