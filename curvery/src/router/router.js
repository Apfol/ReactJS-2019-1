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

import CoursePlayer from '../views/CoursePlayer/CoursePlayer';


function Router(props) {
  return (
    <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/user' exact component={User} />
            <Route path='/mycourses' exact component={MyCourses} />
            <Route path='/courses' exact component={Courses} />
            <Route path="/login" exact render={props => (
              <Login ></Login>
            )}></Route>
            <Route path="/sign_up" exact render={props => (
              <SignUp ></SignUp>
            )}></Route>
            <Route path='/player/:playlistId' exact component={CoursePlayer}></Route>
            <Route path="/about" exact component={About}></Route>
          </Switch>
      </BrowserRouter>
  );
}

export default Router;
