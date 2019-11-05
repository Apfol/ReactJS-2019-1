import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// components
import Navbar from '../components/Layouts/Navbar/Navbar';
import Footer from '../components/Layouts/Footer/Footer';
//Views
import Home from '../views/Home/Home';
import SignIn from '../components/Log/SignIn/SignIn';
import SignUp from '../components/Log/SignUp/SignUp';


function Router() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
    <Route path='/' component={Home}></Route>
    <Route path='/sign-in' component={SignIn}></Route>
    <Route path='/sign-up' component={SignUp}></Route>
    </Switch>
    <Footer></Footer>
      </BrowserRouter>
  );
}

export default Router;
