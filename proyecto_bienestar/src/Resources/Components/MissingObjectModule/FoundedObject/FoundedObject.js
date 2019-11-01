import React, { Component } from "react";
import classes from  "./FoundedObject.css";

class MissingObject extends Component {
  render() {
    return (
      <div className={classes.MissingObject}>        
        <div className = {classes.ImageObjectDiv}>
            <img className={classes.ImageObject} src={this.props.image} />          
        </div>
        <div className={classes.Description}>
            <h3 className = {classes.NameObject}>{this.props.name}</h3>            
              <ul>
                <li>
                  Lugar de perdidad : {this.props.location}
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

export default MissingObject;
