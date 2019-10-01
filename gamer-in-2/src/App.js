import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

function App() {
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

export default App;
