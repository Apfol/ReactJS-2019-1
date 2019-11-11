import React from 'react';

import { withFirebase } from '../Firebase';
import './SignOut.css';
const SignOutButton = ({ firebase }) => (
  <a type="button" onClick={firebase.doSignOut} className="li_SIGNOUT">
    Sign Out
  </a>
);
export default withFirebase(SignOutButton);