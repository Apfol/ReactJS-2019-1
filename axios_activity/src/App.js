import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComicsList from './Components/ComicsList/ComicsList';
import marvel from './Assets/marvel.png';
import boom from './Assets/boom.png';

const HeaderComponent = () =>{
  return(
    <header className="header">
        <img src={marvel}></img>
        <img src={boom}></img>        
    </header>
  )  
}

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <ComicsList />
    </div>
  );
}

export default App;
