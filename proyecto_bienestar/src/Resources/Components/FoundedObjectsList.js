import React, { Component } from "react";
import classes from "./FoundedObjectsList.css";
import FoundedObject from "./FoundedObject";
import SearchFilter from "./SearchFilter";
import axios from "./Data/AxiosInstance"


class FoundedObjectsList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      objects : {
        name: "",
        location: "",
        foundedby: "",
        image: "" ,
        estado:""
      }
    };
  }
    
  componentDidMount(){

    axios.get('/missingObject')
    .then(response => {      
      console.log(response);
      const post = response.data.map(posts =>{
        return {
          name: posts.name,
          location: posts.location  ,
          foundedby:posts.foundedby ,
          image:posts.image,
          estado: posts.estado
        }        
      });
      this.setState(this.objects.MissingObjectList = post);
      console.log(post);
  });
}

objects = {
  MissingObjectList:[]
}

  render() {
    return (      
      <div className={classes.MissingObjectList}>          
          <SearchFilter/>
          <h1 className={classes.Title}>Has encontrado estos objetos</h1>
            {this.objects.MissingObjectList.map(object => <FoundedObject name = {object.name} location = {object.location} 
         foundedby = {object.foundedby} image = {object.image}/>)} 
      </div>
    );
  }
}

export default FoundedObjectsList;