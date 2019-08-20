import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from 'react-router';

import "./App.css";

import { About, Login, SignUp, CoursePlayer } from './components/pages';
import { Header, Footer } from './components/layout';

class App extends Component {

  state = {
    user: {
      logged: false,
      username: "",
      password:""
    }
  }

  startSession = (userData)=>{
    this.setState( prevState => ({
      user: {...userData, ...{logged:true}}
    }));
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <h1>Contenido del inicio</h1>
              </React.Fragment>
            )}></Route>

            {/* <Route path="/login" component={Login}></Route> */}
            <Route path="/login" render={props =>(
              <Login startSession={this.startSession}></Login>
            )}></Route>
            <Route path="/sign_up" component={SignUp}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/course_player" render={props =>(
              <CoursePlayer ></CoursePlayer>
            )}></Route>

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
