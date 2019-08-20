import React, { Component } from "react";
import "./MissingObject.css";



class MissingObject extends Component {
  render() {
    return (
      <div className="MissingObject">        
        <div className = "ImageObjectDiv">
            <img className="ImageObject" src="https://image.flaticon.com/icons/svg/1201/1201867.svg" />          
        </div>
        <div className="Description">           
            <h3 className = "NameObject">{this.props.name}</h3>            
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
          <div className ="Buttons">
            <button className = "Mine">Es mio</button>    
            <button className = "Mine Other">Se de quien es</button>                        
          </div>                                                              
        </div>                     
    );
  }
}

export default MissingObject;
