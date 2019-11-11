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
       <NavLink className="link_NAVIGATION" to={ROUTES.ADMIN}>Admin</NavLink>
     </li>
   )
}
  <li>
    <div className="SignOut_NAVIGATION" to=""><SignOutButton/></div>
  </li>
  <li>
  <div className="searchBar_NAVIGATION"><SearchBar/></div>
  </li>
  <li>
  </li>
  <li>
  <NavLink className="link_NAVIGATION" to={ROUTES.COURSES}>Cursos</NavLink>
  </li>
  <li>
  <NavLink className="link_NAVIGATION" to={ROUTES.LANDING}>Landing</NavLink>
  </li>
  <li>
  <NavLink className="link_NAVIGATION" to={ROUTES.HOME}>Home</NavLink>
  </li>
  
  <li className="logo_NAVIGATION">
  <NavLink className="link_NAVIGATION" to={ROUTES.LANDING}>Logo</NavLink>
  </li>
  </ul>
) ;


const NavigationNonAuth = () => (
  <div className="WithoutAuthentication">
  <ul>
  <li>
  <NavLink className="link_NAVIGATION" to={ROUTES.SIGN_IN}>Sign In</NavLink>
  </li>
  <li>
  <NavLink className="link_NAVIGATION" to={ROUTES.LANDING}>Landing</NavLink>
  </li>
  <li className="logo_NAVIGATION">
  <NavLink className="link_NAVIGATION" to={ROUTES.LANDING}>Logo</NavLink>
  </li>
  </ul>
  </div>
);

export default Navigation;