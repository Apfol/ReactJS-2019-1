import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer.js';
import Tourism from "./components/Tourism/Tourism.js";
import News from "./components/News/News.js";
import Login from "./components/Login/Login.js"

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/tourism" component={Tourism} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
