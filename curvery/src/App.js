import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react'


import Router from './router/router';

class App extends Component {

  state = {
    user: {
      logged: false,
      username: "",
      password: ""
    }
  }

  startSession = (userData) => {
    this.setState(prevState => ({
      user: { ...userData, ...{ logged: true } }
    }));
  }

  render() {
    return (
      <Router startSession={this.startSession.bind(this)}></Router>
    );
  }
}

export default App;
