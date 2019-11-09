import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// components
import Home from '../views/home/Home';
import User from '../views/user/User';
import MyCourses from '../views/MyCourses/MyCourses';
import Courses from '../views/AllCourses/AllCourses';
import Test1 from '../views/TestPage/Test1';
import About from '../views/About/About';
import Login from '../views/UserLogin/UserLogin'
import SignUp from '../views/UserSignUp/UserSignUp';

import {FirebaseContext} from '../services/Firebase'

import CoursePlayer from '../views/CoursePlayer/CoursePlayer';


function Router(props) {
  return (
    <BrowserRouter>
          <Switch>
            <Route path='/user' component={User} />
            <Route path='/mycourses' component={MyCourses} />
            <Route path='/courses' component={Courses} />
            <Route path="/login" render={props => (
              <Login ></Login>
              )}></Route>
            <Route path="/sign_up" render={props => (
              <FirebaseContext.Consumer>
                {firebase => <SignUp firebase={firebase}></SignUp>}
              </FirebaseContext.Consumer>
              
              )}></Route>
            <Route path='/player/:playlistId'  component={CoursePlayer}></Route>
            <Route path="/about" component={About}></Route>
              <Route path='/' component={Home} />
          </Switch>
      </BrowserRouter>
  );
}

export default Router;
