import React, { Component } from "react";
import "./MissingObject.css";


class MissingObject extends Component {
  render() {
    return (
      <div className="MissingObject">
        <div className = "ImageObjectDiv">
            <img class="ImageObject" src="https://image.flaticon.com/icons/svg/1201/1201867.svg" />          
        </div>
        <div class="Description">
            <h3 class = "NameObject">{this.props.object[0].name}</h3>
            <ul>
              <li>
                Lugar de perdida: {this.props.object[0].lugar}
              </li>
              <li>
                Encontrado por : {this.props.object[0].encontrado_por}
              </li>
              <li>
                Lugar de perdidad :  {this.props.object[0].encontrado_por}
              </li>
            </ul>            
            <button class = "Mine">El objeto es mio</button>
        </div>        
      </div>
    );
  }
}

export default MissingObject;
