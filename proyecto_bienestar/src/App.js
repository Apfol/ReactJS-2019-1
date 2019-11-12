import React from 'react';
import classes from './App.css';

//import SportsEquipment from './Resources/Components/SportsEquipmentModule/SportsEquipment';

import SideBar from './Resources/Components/NavBar/SideBar';
//import NavBarComponent from './Resources/Components/NavBar';
import {BrowserRouter} from 'react-router-dom'
import {Route, Link} from 'react-router-dom'
//import MissingObjectList from './Resources/Components/MissingObjectModule/MissingObjectList/MissingObjectList';
import NavBar from './Resources/Components/NavBar/NavBar'
//import MyLostObjectList from './Resources/Components/MissingObjectModule/MyLostObjectList/MyLostObjectList';
import FoundedObjectsList from './Resources/Components/MissingObjectModule/FoundedObjectList/FoundedObjectsList';
import ContactUs from './Resources/Components/ContactUsModule/ContactUs'
import {Col, Row, Container} from 'react-bootstrap'


function App() {
  return (
    <BrowserRouter>     
    <div className={classes.App}>        
          <NavBar/>              
        <Row>
        <Col xs={2}>
          <SideBar />    
        </Col>
        <Col xs={9}>                                                   
        <Route path="/missing-object-list" render ={() => (
            <div>
              {/*<MyLostObjectList></MyLostObjectList>*/}
            </div>

          )}/>  
          <Route path="/my-lost-objects" render ={() => (
            <div>
              {/*<MyLostObjectList></MyLostObjectList>*/}
            </div>
          )}/>
          <Route path="/founded-objects" render ={() => (
            <div>
              <FoundedObjectsList ></FoundedObjectsList>
            </div>
          )}/>
          <Route path="/sports-loan" render ={() => (
            <div>
             {/*<SportsEquipment></SportsEquipment>*/}
            </div>
          )}/> 
          <Route path="/contact-us" render ={() => (
            <div>
              <ContactUs></ContactUs>
            </div>
          )}/>    
          <Route path="/settings" render ={() => (
            <div>
             {/* <MissingObjectList></MissingObjectList>*/}
            </div>
          )}/>    
        </Col>
        </Row>   
        </div>               
    </BrowserRouter>    
    
  );

}

export default App;
  