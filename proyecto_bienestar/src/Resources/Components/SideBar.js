import React, { Component } from "react";
import "./SideBar.css";
import settingsImage from "./settings.png";
import faker from 'faker';


class SideBar extends Component {
  render() {
    return (
      <div className="sidenav">
        <div className="Profile-Image">
          <img className="Avatar" src={faker.image.avatar()}/>
        </div>
        <div>
          <p className="Name">{faker.name.findName()}</p>
          <p className="Place">Universidad de La Sabana</p>
        </div>
        <div className="NavContent">
          <a href="#">Mis Objetos Perdidos</a>
          <a href="#">Objetos Encontrados</a>
          <a href="#">Contáctanos</a>
        </div>
        <img className="SettingsButton" src={settingsImage} href="#"></img>
        
      </div>
    );
  }
}

export default SideBar;