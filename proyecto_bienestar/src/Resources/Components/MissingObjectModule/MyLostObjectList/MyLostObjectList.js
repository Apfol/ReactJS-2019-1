import React, { Component } from "react";
import classes from "./MyLostObjectList.css";
import MissingObject from "../MissingObject/MissingObject";
import SearchFilter from "../MissingObjectList/SearchFilter";


class MyLostObjectList extends Component {
    state = {
        objects:[
          {name: "Celular Xyz", location: "Biblioteca", by: "Cristian"},
          {name: "Sombrilla", location: "Atelier 205", by: "Laura"},                    
        ]
      }
  render() {
    return (      
      <div className={classes.MissingObjectList}>          
          <SearchFilter/>
          <h1 className={classes.Title}>Estos son tus objetos perdidos</h1>
            {this.state.objects.map(object => <MissingObject name = {object.name} location = {object.location} 
         by = {object.by}/>)} 
      </div>
    );
  }
}

export default MyLostObjectList;