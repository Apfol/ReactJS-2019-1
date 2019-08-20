import React from 'react';
import './App.css';
import MissingObjectList from './Resources/Components/MissingObjectList';
import SportsEquipment from './Resources/Components/SportsEquipment';


function App() {
 
  const object=[{ SportsElement: "Balon de Futbol",
  SportsElement1: "Balon de Basket", 
  SportsElement2: "Remos" }]
  
  return (
    <div className="App">
      <SportsEquipment object={object}></SportsEquipment>
      
    </div>
  );
}

export default App;
  