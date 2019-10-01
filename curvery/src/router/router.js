import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// components
import Home from '../views/home/Home';
import User from '../views/user/User';

function Router() {
  
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/user' exact component={User}/>
    </Switch>
    </BrowserRouter>
  );
}

export default Router;
