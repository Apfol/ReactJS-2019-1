import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Tourism from "./components/Tourism/Tourism.js";
import News from "./components/News/News.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import NavigationBar from './components/NavigationBar/NavigationBar.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/tourism" component={Tourism} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
