import React from 'react';
import classes from './App.css';
//import SportsEquipment from './Resources/Components/SportsEquipment';
import SideBar from './Resources/Components/SideBar';
//import NavBarComponent from './Resources/Components/NavBar';
import {BrowserRouter} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
import MissingObjectList from './Resources/Components/MissingObjectList';


function App() {
   /*const objects=[{ SportsElement: "Balon de Futbol",
  SportsElement1: "Balon de Basket", 
  SportsElement2: "Remos" }]*/

  const object = [
    {name: "Calculadora", 
    lugar: "Biblioteca",
    encontrado_por: "Luis"}
  ] 

  
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <SideBar object = {object}/>  
        <Route path="/missing-object-list" render ={() => (
            <div>
              <MissingObjectList></MissingObjectList>
            </div>
          )}/>         
      </div>
    </BrowserRouter>    
    
  );
}

export default App;
  