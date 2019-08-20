import React, { Component } from "react";
import { Redirect } from "react-router";
import "./SignUp.css";
export class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    logged: false
  };

  onSubmit = e => {
    // TODO: Make call and check if register

    e.preventDefault();
    this.setState({
      logged: true
    });
    this.props.startSession(this.state);
    console.log(this.state);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (this.state.logged) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
    
        <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="something@something..."
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>

          <div>
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
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>

          <input type="submit" value="Sign up" />
        </form>
      </div>
    );
  }
}

export default SignUp;
