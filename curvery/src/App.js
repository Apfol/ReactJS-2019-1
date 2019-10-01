import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
// components
import Home from './views/home/Home';



function App() {
  
  return (
    <div className="App">
    <Home></Home>
    </div>
  );
}

export default App;
