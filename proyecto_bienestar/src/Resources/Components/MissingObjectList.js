import React, { Component } from "react";
import "./MissingObjectList.css";
import MissingObject from "./MissingObject";
import SearchFilter from "./SearchFilter";


class MissingObjectList extends Component {
    state = {
        objects:[
          {name: "Celular Xyz", location: "Biblioteca", by: "Cristian"},
          {name: "Sombrilla", location: "Atelier 205", by: "Laura"},
          {name: "Celular y", location: "Edificio B-105", by: "Pedro"},
          {name: "Cargador Iphone", location: "Edificio B-204", by: "Leidy"},
          {name: "Cachucha", location: "Biblioteca", by: "Juan"},
          {name: "Botilito", location: "Biblioteca", by: "Felipe"},
          {name: "Chaqueta", location: "Biblioteca", by: "Cristian"},          
        ]
      }
  render() {
    return (      
      <div className="MissingObjectList">                         
          <SearchFilter/>
            {this.state.objects.map(object => <MissingObject name = {object.name} location = {object.location} 
         by = {object.by}/>)} 
                       
      </div>
    );
  }
}

export default MissingObjectList;