import React, { Component } from "react";
import classes from "./SideBar.css";
import settingsImage from "./settings.png";
import faker from 'faker';


class SideBar extends Component {
  render() {
    return (
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
    );
  }
}

export default SideBar;