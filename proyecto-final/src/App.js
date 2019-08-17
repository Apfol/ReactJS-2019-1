import React from 'react';
import logo from './logo.svg';
import NavigationBar from './header/NavigationBar';
import './App.css';
import PictureSlider from './header/Carousel';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
        <PictureSlider></PictureSlider>
      </header>
    </div>
  );
}

export default App;
