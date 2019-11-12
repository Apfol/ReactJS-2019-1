import React, { Component } from 'react';
import classes from './App.css';


import SportsEquipment from './Resources/Components/SportsEquipmentModule/SportEquipmentList/SportEquipmentList';


import SideBar from './Resources/Components/NavBar/SideBar';
//import NavBarComponent from './Resources/Components/NavBar';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import MissingObjectList from './Resources/Components/MissingObjectModule/MissingObjectList/MissingObjectList';

import NavBar from './Resources/Components/NavBar/NavBar'
//import MyLostObjectList from './Resources/Components/MissingObjectModule/MyLostObjectList/MyLostObjectList';
import FoundedObjectsList from './Resources/Components/MissingObjectModule/FoundedObjectList/FoundedObjectsList';
import ContactUs from './Resources/Components/ContactUsModule/ContactUs'
import {Col, Row} from 'react-bootstrap'

export default class App extends Component {      
  
  render(){
    const object = [
      {name: "Calculadora", 
      lugar: "Biblioteca",
      encontrado_por: "Luis"}
    ] 
    return (
      <BrowserRouter>     
      <div className={classes.App}>        
            <NavBar/>              
          <Row>
          <Col xs={2}>
            <SideBar object = {object}/>    
          </Col>
          <Col xs={9}>                                                   
            <Route path="/founded-objects" render ={() => (
              <div>
                <FoundedObjectsList/>
              </div>
            )}/>
            <Route path="/sports-loan" render ={() => (
              <div>
                <SportsEquipment></SportsEquipment>
              </div>
            )}/> 
            <Route path="/contact-us" render ={() => (
              <div>
                <ContactUs></ContactUs>
              </div>
            )}/>       
  
        
          </Col>
          </Row>   
          </div>               
      </BrowserRouter>    
      
    );

  }
  

}


  