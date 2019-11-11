import React from 'react';
import { NavLink } from 'react-router-dom';

import SignOutButton from '../SignOut/SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import {AuthUserContext} from '../Session'
import './Navigation.css';
import SearchBar from './searchBar/SearchBar';

const Navigation = () => (
  <div className="navigation_NAVIGATION">
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (

  <ul>
  { !!authUser.roles[ROLES.ADMIN] && (
     <li>
       <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
     </li>
   )
}
  <li>
  <SignOutButton/>
  </li>
  <li>
  <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
  </li>
  <li>
  <NavLink to={ROUTES.COURSES}>Cursos</NavLink>
  </li>
  <li>
  <NavLink to={ROUTES.LANDING}>Landing</NavLink>
  </li>
  <li>
  <NavLink to={ROUTES.HOME}>Home</NavLink>
  </li>
  <li>
  <SearchBar></SearchBar>
  </li>
  </ul>
) ;


const NavigationNonAuth = () => (
  <div className="WithoutAuthentication">
  <ul>
  <li>
  <NavLink to={ROUTES.LANDING}>Landing</NavLink>
  </li>
  <li>
  <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
  </li>
  </ul>
  </div>
);

export default Navigation;