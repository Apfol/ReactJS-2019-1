import React from 'react';

import { withFirebase } from '../Firebase';
import './SignOut.css';
const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="li_SIGNOUT">
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);