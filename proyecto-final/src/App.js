import React from 'react';
import NavigationBar from './header/NavigationBar';
import './App.css';
import PictureSlider from './header/PictureSlider';
import Body from './body/body';
import Footer from './footer/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
        <PictureSlider></PictureSlider>
      </header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
