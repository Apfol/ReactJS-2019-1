import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Tourism from "./components/Tourism/Tourism";
import News from "./components/News/News.js"

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
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
