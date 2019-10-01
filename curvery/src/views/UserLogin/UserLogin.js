import React, { Component } from "react";
import { Redirect } from "react-router";
import classes from "./UserLogin.css";
import Menu from '../../components/menu/Menu'
import Footer from '../../components/footer/Footer'

export class Login extends Component {
  state = {
    username: "",
    password: "",
    logged: false
  };

  onSubmit = e => {
    // TODO: Make call and check if register

    e.preventDefault();

    this.props.startSession(this.state);
    console.log(this.state);
    this.setState({
      logged: true
    });
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
      <div>
      <Menu></Menu>
      <div className={classes.container} id="container">
	
	<div className={classes.form_container}>
		<form onSubmit={this.onSubmit}>
			<h1>Sign in</h1>
			<span></span>
			<input id="username" type="text" name="username" placeholder="username..." value={this.state.username} onChange={this.onChange} />
			<input id="password" type="password" name="password" value={this.state.password} onChange={this.onChange} />
			<a href="#">Olvidaste tu contraseña ?</a>
			<button type="submit" value="Log in">Sign In</button>
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
<Footer></Footer>
      
      </div>
      );
    }
  }

export default Login;
