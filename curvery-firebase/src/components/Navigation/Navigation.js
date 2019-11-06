import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';



const Navigation = ({authUser}) => (
  <div>{authUser ? <NavigationAuth/> : <NavigationNonAuth/>}</div>
);

const NavigationAuth = () => (

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