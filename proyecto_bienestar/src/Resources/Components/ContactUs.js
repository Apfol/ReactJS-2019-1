import React, { Component } from "react";
import classes from "./ContactUs.css";


class ContactUs extends Component {
    state = {
        objects:[
          {name: "Celular Xyz", location: "Biblioteca", by: "Cristian"},                             
        ]
      }
  render() {
    return (      
      <div className={classes.ContactUs}>          
          <h1 className={classes.Title}>¿Tienes alguna duda?</h1>
      </div>
    );
  }
}

export default ContactUs;