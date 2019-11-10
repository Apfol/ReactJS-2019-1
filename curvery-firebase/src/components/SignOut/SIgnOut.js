import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <li type="button" onClick={firebase.doSignOut}>
    Sign Out
  </li>
);
export default withFirebase(SignOutButton);