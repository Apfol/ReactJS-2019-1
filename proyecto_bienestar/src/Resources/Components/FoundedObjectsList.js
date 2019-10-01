import React, { Component } from "react";
import classes from "./FoundedObjectsList.css";
import FoundedObject from "./FoundedObject";
import SearchFilter from "./SearchFilter";


class FoundedObjectsList extends Component {
    state = {
        objects:[
          {name: "Celular Xyz", location: "Biblioteca", by: "Cristian"},                             
        ]
      }
  render() {
    return (      
      <div className={classes.MissingObjectList}>          
          <SearchFilter/>
          <h1 className={classes.Title}>Has encontrado estos objetos</h1>
            {this.state.objects.map(object => <FoundedObject name = {object.name} location = {object.location} 
         by = {object.by}/>)} 
      </div>
    );
  }
}

export default FoundedObjectsList;