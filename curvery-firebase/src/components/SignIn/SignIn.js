import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget'
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import './SignIn.css';

const SignInPage = () => (
  <div>
    <SignInForm />
    <div className="SignUp_SIGNIN">
    <SignUpLink />
    </div>
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form className="form_SIGNIN" onSubmit={this.onSubmit}>
  <div className="heading_SIGNIN">SIGN IN CURVERY</div>
  <div className="leftForm_SIGNIN">
    <label className="label_SIGNIN">Email</label> <br />
      <input
         type="email"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email Address"
          id="email" 
        /><br />
    <label className="label_SIGNIN">Password</label> <br />
    <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          id="pass"
        /><br />
        <button className="buttonSubmit_SIGNIN" disabled={isInvalid} type="submit">
        Sign In
        </button>
        {error && <p>{error.message}</p>}
        </div>
        <div className="right_SIGNIN">
        <div className="connect_SIGNIN">Connect with</div>
        <SignInFacebook/>
        <SignInTwitter/><br />
        <SignInGoogle />
        <PasswordForgetLink />
      </div>
    </form>   
    );
  }
}


class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <button className="google_plus_SIGNIN" type="submit">Google</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <button className="facebook_SIGNIN" type="submit">Facebook</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


class SignInTwitterBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithTwitter()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <button className="twitter_SIGNIN" type="submit">Twitter</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}


const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

const SignInTwitter = compose(
  withRouter,
  withFirebase,
)(SignInTwitterBase);


const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter };
