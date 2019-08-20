import React from 'react';
import './App.css';
import MissingObject from './Resources/Components/MissingObject';
import SideBar from './Resources/Components/SideBar';
import faker from 'faker';
import SportsEquipment from './Resources/Components/SportsEquipment';

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
      <SportsEquipment/>
      
    </div>
  );
}

export default App;
