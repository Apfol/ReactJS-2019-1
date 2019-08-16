import React from 'react';
import './App.css';
import MissingObject from './Resources/Components/MissingObject';

function App() {
  const object = [
    {name: "Calculadora", 
    lugar: "Biblioteca",
    encontrado_por: "Luis"}
  ] 
  return (
    <div className="App">
      
      <MissingObject object = {object}></MissingObject>
    </div>
  );
}

export default App;
