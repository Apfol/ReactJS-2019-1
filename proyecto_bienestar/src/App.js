import React from 'react';
import './App.css';
import MissingObject from './Resources/Components/MissingObject';
import SideBar from './Resources/Components/SideBar';

function App() {
  const object = [
    {name: "Calculadora", 
    lugar: "Biblioteca",
    encontrado_por: "Luis"}
  ] 
  return (
    <div className="App">
      
      <MissingObject object = {object}></MissingObject>
      <SideBar object = {object}/>
    </div>
  );
}

export default App;
