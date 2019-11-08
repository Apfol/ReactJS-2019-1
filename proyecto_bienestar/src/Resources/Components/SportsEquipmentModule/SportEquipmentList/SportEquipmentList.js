import React, { Component } from "react";
import classes from "./SportEquipmentList.css";
import SearchFilter from "../../MissingObjectModule/MissingObjectList/SearchFilter";
import Module from "../SportsEquipment";


class SportEquipmentModule extends Component {
    state = {
       
      }
  render() {
    return (      
      <div className={classes.SportEquipmentList}>                 
        <Module/>         
    </div>
    );
  }
}

export default SportEquipmentModule;