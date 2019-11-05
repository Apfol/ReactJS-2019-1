import React, { Component } from "react";
import { Redirect } from "react-router";
import classes from "./UserLogin.css";
import Menu from '../../components/menu/Menu'
import Footer from '../../components/footer/Footer'
import * as actionCreators from '../../store/actions/';
import { connect } from 'react-redux';

export class Login extends Component {
  state = {
    email:"",
    username: "",
    password: "",
    isUserLoggedIn: this.props.isUserLoggedIn
  };

  componentDidUpdate() {
    if (this.state.isUserLoggedIn) {
      // this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn
    });
  }

  onSubmit = e => {
    // TODO: Make call and check if register

    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.onUserLogin(userData, () => {
      // this.props.history.push('/');
    });


  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.isUserLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Menu></Menu>
        <div className={classes.container} id="container">

          <div className={classes.form_container}>
            <form onSubmit={this.onSubmit}>
              <h1>Sign in</h1>
              <span></span>
              <input id="email" type="email" name="email" placeholder="email..." value={this.state.email} onChange={this.onChange} />
              <input id="password" type="password" name="password" value={this.state.password} onChange={this.onChange} />
              <a href="#">Olvidaste tu contraseña ?</a>
              <button type="submit" value="login">Sign In</button>
            </form>
          </div>
          <div className={classes.overlay_container}>
            <div className={classes.overlay}>
              <div className={classes.overlay_panel}>
                <h1>Bienvenido!</h1>
                <p>Llena tus datos personales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    loadingAuth: state.authenticationStore.loadingAuth
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
