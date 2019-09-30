import React, { Component } from "react";
import classes from "./SideBar.css";
import settingsImage from "./settings.png";
import faker from 'faker';
//import MissingObjectList from './Resources/Components/MissingObjectList';
import { BrowserRouter, Route, Link} from 'react-router-dom';


class SideBar extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className={classes.sidenav}>
        <div className={classes.ProfileImage}>
          <img className={classes.Avatar} src={faker.image.avatar()}/>
        </div>
        <div>
          <p className={classes.Name}>{faker.name.findName()}</p>
          <p className={classes.Place}>Universidad de La Sabana</p>
        </div>
        <div className={classes.NavContent}>
          <p>Mis Objetos Perdidos</p>
          <p>Objetos Encontrados</p>
          <p>Prestamo Deportes</p>
          <p>Contáctanos</p>
        </div>
        <img className={classes.SettingsButton} src={settingsImage} href="#"></img>
      </div>
=======
        <div className={classes.sidenav}>
          <div className={classes.Profile-Image}>
            <img className={classes.Avatar} src={faker.image.avatar()}/>
          </div>
          <div>
            <p className={classes.Name}>{faker.name.findName()}</p>
            <p className={classes.Place}>Universidad de La Sabana</p>
          </div>
          <div className={classes.NavContent}>
            <Link to="/missing-object-list">Inicio</Link>
            <Link to="/my-lost-object">Mis Objetos Perdidos</Link>
            <Link to="/found-objects">Objetos Encontrados</Link>
            <Link to="/sport">Prestamo Deportes</Link>
            <Link to="/contact-us">Contáctanos</Link>
          </div>
          <img className={classes.SettingsButton} src={settingsImage} href="#"></img>
        </div>      
>>>>>>> 83ac0c54c30b94d53ade83d5a07ab8d4cf9f901f
    );
  }
}

export default SideBar;