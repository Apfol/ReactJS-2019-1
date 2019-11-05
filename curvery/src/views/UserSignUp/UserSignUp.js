import React, { Component } from "react";
import { Redirect } from "react-router";
import classes from "./UserSignUp.css";
import Menu from "../../components/menu/Menu";
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/';

export class UserSignUp extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    isUserLoggedIn: this.props.isUserLoggedIn
  };

  componentDidUpdate() {
    if (this.state.isUserLoggedIn) {
      // this.props.history.push('/');
      console.log("Redireccionando");
      
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

    this.props.onUserSignIn(userData, () => {
      // this.props.history.push('/');
      console.log("Redireccionado");

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
        <div className={classes.container}>
          <form onSubmit={this.onSubmit}>
            <div>
              <h1>Sign up</h1>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="username..."
                value={this.state.username}
                onChange={this.onChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="someone@validemail.com"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" value="signup">Sign Up</button>

          </form>
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
    onUserSignIn: (authData, onSuccessCallback) => dispatch(
      actionCreators.signUp(authData, onSuccessCallback)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
