import React from 'react';
import logo from './logo.svg';
import NavigationBar from './header/NavigationBar';
import './App.css';
import PictureSlider from './header/Carousel';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <PictureSlider></PictureSlider>
    </div>
  );
}

export default App;
