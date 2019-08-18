import React from 'react';
import NavigationBar from './header/NavigationBar';
import './App.css';
import PictureSlider from './header/PictureSlider';
import Body from './body/body';


function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
        <PictureSlider></PictureSlider>
        <Body></Body>
      </header>
    </div>
  );
}

export default App;
