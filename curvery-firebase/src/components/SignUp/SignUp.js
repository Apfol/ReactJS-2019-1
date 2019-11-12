import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import {compose} from 'recompose'

import {withFirebase} from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import './SignUp.css';

const SignUpPage = () => (
  <div>
    <SignUpForm>
    {firebase => <SignUpForm firebase={firebase}/>}
    </SignUpForm>
  </div>
);
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};
class SignUpFormBase extends Component{
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
  };

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = {};
    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
            isAdmin,
          });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render(){
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    
    return(
      <form className="form_SIGNUP" onSubmit={this.onSubmit} id="login-form">
      <div className="heading_SIGNUP">SIGN UP TO CURVERY</div>
      <div className="leftForm_SIGNUP">
      <label className="label_SIGNUP">User Name</label> <br />
             <input
             name="username"
             value={username}
             onChange={this.onChange}
             type="text"
             placeholder="Full Name"
             id="username"
             /><br />
      <label className="label_SIGNUP">Email</label> <br />
              <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              placeholder="Email Address"
              id="email"
              /><br />
      <label className="label_SIGNUP">Password</label> <br />
              <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              id="password"             
              /><br />
      <label className="label_SIGNUP">Repeat Password</label> <br />
              <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              id="password"

              /><br />
      <button className="buttonSubmit_SIGNUP" disabled={isInvalid} type="submit">Sign Up</button>
        {error && <p>{error.message}</p>}
  </div>
</form>  
    
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

/* 
A better way is to compose the higher-order components instead
*/
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };