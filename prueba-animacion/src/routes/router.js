import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// components
import Navbar from '../components/Layouts/Navbar/Navbar';
import Footer from '../components/Layouts/Footer/Footer';
//Views
import Home from '../views/Home/Home';
import SignIn from '../components/Log/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';


function Router() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/sign-in' component={SignIn}></Route>
    <Route exact path='/sign-up' component={SignUp}></Route>
    <Footer></Footer>
    </Switch>
      </BrowserRouter>
  );
}

export default Router;
