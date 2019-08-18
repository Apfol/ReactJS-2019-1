import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
