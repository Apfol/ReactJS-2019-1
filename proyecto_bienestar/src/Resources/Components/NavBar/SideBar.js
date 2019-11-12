import React, { Component } from "react";
import classes from "./SideBar.css";
import settingsImage from "../../Assest/settings.png";
import faker from 'faker';
import { Link} from 'react-router-dom';
import * as actionCreators from '../../../Store/Actions/';
import { connect } from 'react-redux';
import axios from 'axios';


class SideBar extends React.Component {
  state={
    urlImg: ''
  }


  render() {    
    return (
        <div className={classes.sidenav}>
          <div className={classes.all}>

            {this.renderUser()}

            <div className={classes.NavContent}>
              <Link to="/missing-object-list">Inicio</Link>
              <Link to="/my-lost-objects">Mis Objetos Perdidos</Link>
              <Link to="/founded-objects">Objetos Encontrados</Link>
              <Link to="/sports-loan">Prestamo Deportes</Link>
              <Link to="/contact-us">Contáctanos</Link>
            </div>
            <Link to="/settings">
              <img className={classes.SettingsButton} src={settingsImage} href="#"></img>
            </Link>
          </div>          

        </div>      
    );
  } 
  componentDidUpdate(){
    this.getphoto()
  }
  renderUser(){
    if(this.props.isUserLoggedIn)
    {
      let DataUser = (
        <section>
          <div className={classes.Profile - classes.Image}>
            <img className={classes.Avatar} id = "imap"/>
          </div>
          <div>
            <p className={classes.Name}>{this.props.CurrentUser.userName}</p>
            <p className={classes.Place}>Universidad de La Sabana</p>
          </div>
        </section>
      );
      return DataUser;                         
    }
    else{
        return null;
    }
  }
  h(){
    return faker.image.image()
  }
  getphoto(){
    var img = null;
    const instance = axios.create({
      baseURL: 'https://graph.microsoft.com/v1.0/me/photo/$value',
      headers:{        
        'Authorization': this.props.CurrentUser.idToken
      }
    });
    instance.get('').then((Response) => 
    {/*
      console.log(Response);
      var str = "äöüÄÖÜçéèñ";
      
      var b64 = window.btoa(unescape(encodeURIComponent(Response.data)))
      window.bt
      console.log(b64);
      document.getElementById("imap")
      .setAttribute("src", "data:image/png;base64,"+ Response.data)*/
/*
      var str2 = decodeURIComponent(escape(window.atob(Response.data)));
      console.log(str2);      
      img = str2;*/
      /*
      var binaryData = [];
      binaryData.push(Response.data);
      const url = window.URL || window.webkitURL;
      const byteArray = new Uint8Array(Response.data);
      const blobUrl = url.createObjectURL(new Blob(binaryData, {type: "image/png"}));
      document.getElementById("imap").setAttribute("src", blobUrl);*/

      /*var img = document.createElement('img');
      img.src = 'data:image/jpeg;base64,' + this.hexToBase64(Response.data);
      console.log(Response)*/      
      const url = window.URL || window.webkitURL;
      const blobUrl = url.createObjectURL(Response.data);      
      
      document.getElementById("imap").setAttribute("src", blobUrl);
      
    }).catch((error) => {
        console.log(error);
    })    
     return img
  }
   hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
  }
}


const mapStateToProps = state => {
  return {
      isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
      loadingAuth: state.authenticationStore.loadingAuth,
      loginerrorbool: state.authenticationStore.loginerrorbool,
      CurrentUser: state.authenticationStore.userLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onUserLogin: (authData, onSuccessCallback) => dispatch(
          actionCreators.logIn(authData, onSuccessCallback)
      ),
      deleteError:() => dispatch(
          actionCreators.loginerror()
      )        
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);