import React from 'react';
import NavigationBar from './header/NavigationBar';
import './App.css';
import PictureSlider from './header/PictureSlider';

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
