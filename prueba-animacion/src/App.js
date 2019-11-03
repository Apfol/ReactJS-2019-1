import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import {auth} from './services/firebase';
import { setCurrentUser, clearCurrentUser } from './redux/auth/auth.actions';


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
    <Navbar></Navbar>
    <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/sign-in' component={SignIn}></Route>
    <Route exact path='/sign-up' component={SignUp}></Route>
    </Switch>
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
