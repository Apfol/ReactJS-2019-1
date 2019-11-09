import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Tourism from "./components/Tourism/Tourism.js";
import News from "./components/News/News.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/tourism" component={Tourism} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
