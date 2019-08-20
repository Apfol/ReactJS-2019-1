import React, { Component } from "react";
import { Redirect } from 'react-router';

export class Login extends Component {

    state = {
        username: "",
        password: "",
        logged: false
    }

    onSubmit = (e)=>{
        // TODO: Make call and check if register

        e.preventDefault();
        this.props.startSession(this.state);
        this.setState({
            logged: true
        });
        console.log(this.state);
    }

    onChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        if(this.state.logged){
            return <Redirect to="/" />
        }
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username..."
            value={this.state.username}
            onChange={this.onChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />

          <input type="submit" value="Log in"></input>
        </form>
      </div>
    );
  }
}

export default Login;