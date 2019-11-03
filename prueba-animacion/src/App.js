import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {auth} from './services/firebase';
import { setCurrentUser, clearCurrentUser } from './redux/Logger/auth/auth.actions';
import Router from './routes/router';


function App({currentUser, setCurrentUser, clearCurrentUser }) {

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
      } else {
        clearCurrentUser();
      }
    });
    return () => unsubscribeFromAuth();
    }, [currentUser, setCurrentUser, clearCurrentUser]);

  console.log(currentUser);
  
  return (
    <div className="App">
    <div className="navbar">
    <Router></Router>
    </div>
    </div>
  );
}


const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  clearCurrentUser: () => dispatch(clearCurrentUser())
});


export default connect(mapStateToProps,mapDispatchToProps)(App);
