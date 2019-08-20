import React from 'react';
import './App.css';

import MissingObjectList from './Resources/Components/MissingObjectList';
import SportsEquipment from './Resources/Components/SportsEquipment';
import SideBar from './Resources/Components/SideBar';


function App() {
   const objects=[{ SportsElement: "Balon de Futbol",
  SportsElement1: "Balon de Basket", 
  SportsElement2: "Remos" }]
  const object = [
    {name: "Calculadora", 
    lugar: "Biblioteca",
    encontrado_por: "Luis"}
  ] 

  
  return (
    <div className="App">
      <SportsEquipment object={object}></SportsEquipment>
            
      <SideBar object = {object}/>            
    </div>
  );
}

export default App;
  