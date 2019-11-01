import React, { Component } from "react";
import classes from  "./MissingObject.css";

class MissingObject extends Component {
  render() {
    return (
      <div className={classes.MissingObject}>        
        <div className = {classes.ImageObjectDiv}>
            <img className={classes.ImageObject} src="https://image.flaticon.com/icons/svg/1201/1201867.svg" />          
        </div>
        <div className={classes.Description}>
            <h3 className = {classes.NameObject}>{this.props.name}</h3>            
              <ul>
                <li>
                  Lugar de perdidad : {this.props.location}
                </li>
                <li>
                  Encontrado por : {this.props.by}  
                </li>
                <li>
                  Lugar de perdidad :  {this.props.by}
                </li>
              </ul>
          </div>                       
          <div className ={classes.Buttons}>
            <button className = {classes.Mine}>Es mio</button>    
            <button className = {classes.Mine}>Se de quien es</button>                        
          </div>                                                              
        </div>                     
    );
  }
}

export default MissingObject;
