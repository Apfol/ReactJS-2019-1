import React from 'react';
import './App.css';
import MissingObject from './Resources/Components/MissingObject';
import MissingObjectList from './Resources/Components/MissingObjectList';

function App() {
  const object = [
    {name: "Calculadora", 
    location: "Biblioteca",
    by: "Luis"}
  ] 
  return (
    <div className="App">
      <MissingObjectList/>
    </div>
  );
}

export default App;
  