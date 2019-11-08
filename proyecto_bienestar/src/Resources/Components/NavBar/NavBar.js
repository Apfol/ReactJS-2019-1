import React, { Component } from "react";
import { connect } from 'react-redux';
import classes from "./NavBar.css";
import LoginImg from "../../../Resources/Assest/SignIn.png";
import {Nav, Modal, Navbar, Button} from "react-bootstrap";
import {IoMdContact} from "react-icons/io";
import Spinner from '../Spinner/Spinner'
import {Link} from 'react-router-dom';
import MyUser from './MyUSer/MyUser'
import * as actionCreators from '../../../Store/Actions/';
import f from '../../../Instances/FireBase'


class NavBarComponent extends Component {
  state = {
    smShow: false,
    nuevo: false,
    userName: '',
    password: '',
    objects: [
      { name: "Celular Xyz", location: "Biblioteca", by: "Cristian" },
      { name: "Sombrilla", location: "Atelier 205", by: "Laura" },
      { name: "Celular y", location: "Edificio B-105", by: "Pedro" },
      { name: "Cargador Iphone", location: "Edificio B-204", by: "Leidy" },
      { name: "Cachucha", location: "Biblioteca", by: "Juan" },
      { name: "Botilito", location: "Biblioteca", by: "Felipe" },
      { name: "Chaqueta", location: "Biblioteca", by: "Cristian" }
    ]
  };
  
  setSmShow() {
    this.setState({
      smShow: !this.state.smShow
    });    
  }      

  getModalStatus(){    
    if(!this.state.smShow && !this.props.isUserLoggedIn){      
      return true;
    }
    else{
      return false;
    }
  }

  render() {
    return (
      <div>        
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Unisabana Objetos Perdidos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">
                <Link to="/missing-object-list">Inicio</Link>                
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>              
            </Nav>     
            {
            !this.props.isUserLoggedIn ? 
            <Button variant="outline-success" onClick={this.submitLoginForm}>                                     
            <img className={classes.LoginButton} src={LoginImg} href="#"></img>                        
            </Button>   
            :      
            <div className = {classes.Mydata}>
            <MyUser 
            user = {f.auth().currentUser}>            
            </MyUser>
            <Button variant="outline-success" onClick={() => this.goout()}>Salir</Button>   
            </div>      
                        
            }                                      
          </Navbar.Collapse>
        </Navbar>

        <Modal
          size="xs"
          show={this.props.loadingAuth}          
          aria-labelledby="example-modal-sizes-title-sm"
        >            
        <Spinner/>
        </Modal>        
      </div>
    );
  }
  submitLoginForm = () => {
    const userData = {
        email: this.state.userName,
        password: this.state.password
    }

    this.props.onUserLogin(userData, () => {
        
    });
  } 
  goout = () => {    
    this.props.Exit();
  }

  updateLoginInfo = (event, type) => {
    var updatedLoginInfo = {
      ...this.state
    }
    updatedLoginInfo[type] = event.target.value;
    this.setState({
      userName: updatedLoginInfo.userName,
      password: updatedLoginInfo.password
    });
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
      ),
      Exit:() => dispatch(
        actionCreators.persistAuthentication()
      )  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
