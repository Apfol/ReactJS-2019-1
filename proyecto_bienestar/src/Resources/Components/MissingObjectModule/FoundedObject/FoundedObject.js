import React, { Component } from "react";
import classes from  "./FoundedObject.css";
import firebase from '../../../../Instances/FireBase'
class FoundedObject extends Component {
  componentWillMount(){
    console.log(this.props.image)
    const storageRef = firebase.storage().ref('/')
   
    storageRef.child(this.props.image).getDownloadURL().then(url =>{

      console.log(url);

      var image= document.getElementById(this.props.image);
      
      image.src = url;
  }).catch(function(error){
      console.log(error);
  });
 
  }
  render() {
    return (
      <div className={classes.MissingObject}>        
        <div className = {classes.ImageObjectDiv}>
            <img className={classes.ImageObject} id = {this.props.image}  />
        </div>
        <div className={classes.Description}>
            <h3 className = {classes.NameObject}>{this.props.name}</h3>            
              <ul>
                <li>
                  Lugar de perdida : {this.props.foundlocation}
                </li>
                <li>
                  Encontrado por : {this.props.foundedby}  
                </li>
              </ul>
          </div>                       
          <div className ={classes.State}>
            <div className={classes.ColorState}></div>  
            <p className={classes.TextState}>Activo</p>                 
          </div>                                                              
        </div>                     
    );
  }
}

export default FoundedObject;
