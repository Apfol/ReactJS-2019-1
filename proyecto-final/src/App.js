import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import NavigationBar from './header/NavigationBar/NavigationBar';
import PictureSlider from './body/PictureSlider/PictureSlider';
import Home from './body/Home/Home';
import Footer from './footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <Route path="/" exact component={Home} />
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
