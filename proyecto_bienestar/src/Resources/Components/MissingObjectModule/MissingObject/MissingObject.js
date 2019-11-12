import React, { Component } from "react";
import classes from  "./MissingObject.css";

var MissingObject = (props) => {    
      return (
        <div className={classes.MissingObject}>        
          <div className = {classes.ImageObjectDiv}>
              <img className={classes.ImageObject} id={props.image} />          
          </div>
          <div className={classes.Description}>
              <h3 className = {classes.NameObject}>{props.name}</h3>            
                <ul>
                  <li>
                    Lugar de perdida : {props.location}
                  </li>
                </ul>
            </div>                       
            <div className ={classes.State}>
              <button >Encontrado</button>                
            </div>                                                              
          </div>                     
      );
  }  

export default MissingObject;
