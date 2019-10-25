import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './containers/HomePage/HomePage'
import LogIn from './containers/LogIn/LogIn';
import SignIn from './containers/SignIn/SignIn';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' component = {HomePage} exact/>
        <Route path = '/login'  component = {LogIn}/>
        <Route path = '/signin' component = {SignIn}/>
        <Route component = {NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
