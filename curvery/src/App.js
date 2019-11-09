import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react'

import * as actionCreators from './store/actions/';
import { connect } from 'react-redux';
import Router from './router/router';
import { FirebaseContext } from './services/Firebase'

class App extends Component {

  constructor(props){
    super(props)
  }


  componentDidMount () {
    this.props.onPersistAuthentication();
    
  }

  componentWillMount(){
    // this.props.firebase.db.ref().child('users').push({
      // name: "Prueeebaa firebase libreria",
      // lastname: "Prueba@lastname.com",
      // birthDate: "24/07/1998"
    // });
  }
  componentWillUnmount(){
    // TODO: QUITAR/CERRAR CONEXIONES

  }

  render() {
    return(
      // <FirebaseContext.Consumer>
      //   {firebase => (
      //     <Router firebase={firebase}></Router>
      //   )}
      // </FirebaseContext.Consumer>
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
