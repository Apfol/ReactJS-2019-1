import React from 'react';
import NavigationBar from './header/NavigationBar/NavigationBar';
import './App.css';
import PictureSlider from './header/PictureSlider/PictureSlider';
import Content from './body/Content/Content';
import Footer from './footer/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar></NavigationBar>
        <PictureSlider></PictureSlider>
      </header>
      <Content></Content>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
