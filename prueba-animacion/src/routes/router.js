import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// components
import Home from '../views/Home/Home';
import SignIn from '../components/Log/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Navbar from '../components/Layouts/Navbar/Navbar';


function Router() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/sign-in' component={SignIn}></Route>
    <Route exact path='/sign-up' component={SignUp}></Route>
    </Switch>
      </BrowserRouter>
  );
}

export default Router;
