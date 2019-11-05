import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react'

import * as actionCreators from './store/actions/';
import { connect } from 'react-redux';
import Router from './router/router';

class App extends Component {


  componentDidMount () {
    this.props.onPersistAuthentication();
  }

  render() {
    return (
      <Router></Router>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch( actionCreators.persistAuthentication() )
  };
};


export default connect(null, mapDispatchToProps)(App);
