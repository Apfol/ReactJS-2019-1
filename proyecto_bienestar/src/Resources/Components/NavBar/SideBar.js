import React, { Component } from "react";
import classes from "./SideBar.css";
import settingsImage from "./settings.png";
import faker from 'faker';
//import MissingObjectList from './Resources/Components/MissingObjectList';
import { BrowserRouter, Route, Link} from 'react-router-dom';


class SideBar extends React.Component {
  render() {
    return (
        <div className={classes.sidenav}>
          <div className={classes.all}>
            <div className={classes.Profile-Image}>
              <img className={classes.Avatar} src={faker.image.avatar()}/>
            </div>
            <div>
              <p className={classes.Name}>{faker.name.findName()}</p>
              <p className={classes.Place}>Universidad de La Sabana</p>
            </div>
            <div className={classes.NavContent}>
              <Link to="/missing-object-list">Inicio</Link>
              <Link to="/my-lost-objects">Mis Objetos Perdidos</Link>
              <Link to="/founded-objects">Objetos Encontrados</Link>
              <Link to="/sports-loan">Prestamo Deportes</Link>
              <Link to="/contact-us">Contáctanos</Link>
            </div>
            <Link to="/settings"><img className={classes.SettingsButton} src={settingsImage} href="#"></img></Link>
          </div>          

        </div>      
    );
  }
}

export default SideBar;