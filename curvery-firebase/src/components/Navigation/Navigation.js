import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import {AuthUserContext} from '../Session'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (

  <ul>
  <li>
  <NavLink to={ROUTES.LANDING}>Landing</NavLink>
  </li>
  <li>
  <NavLink to={ROUTES.HOME}>Home</NavLink>
  </li>
  <li>
  <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
  </li>
  { !!authUser.roles[ROLES.ADMIN] && (
     <li>
       <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
     </li>
   )
}
  <li>
  <SignOutButton />
  </li>
  </ul>
) ;


const NavigationNonAuth = () => (
  
  <ul>
    <li>
    <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
    <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </ul>
);

export default Navigation;