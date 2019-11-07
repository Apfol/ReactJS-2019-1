import React, { Component } from "react";
import { connect } from 'react-redux';
import "./NavBar.css";
import {Nav, Modal, Navbar, Button} from "react-bootstrap";
import {IoMdContact} from "react-icons/io";
import {Link} from 'react-router-dom';
import MyUser from './MyUSer/MyUser'
import * as actionCreators from '../../../Store/Actions/';


class NavBarComponent extends Component {
  state = {
    smShow: false,
    nuevo: false,
    userName: '',
    password: ''     
  };
  
  setSmShow() {    
      this.setState({
        smShow: !this.state.smShow
      });  
  }

  getModalStatus(){
    console.log(this.props.isUserLoggedIn)    
      if(this.state.smShow && !this.props.isUserLoggedIn){      
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
            {!this.props.isUserLoggedIn ? 
            <Button variant="outline-success" onClick={() => this.setSmShow()}>Ingresar</Button>   
            :
            <div>
              <MyUser 
            user = {this.props.CurrentUser}>
            </MyUser>
            
            </div>            
            }         
          </Navbar.Collapse>
        </Navbar>

        <Modal
          size="sm"
          show={this.getModalStatus(1)}
          onHide={() => this.setSmShow()}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Ingresar     
              <IoMdContact size = "30px"/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>            
            <form action="">
              <div class="form-group">
                <label for="email">Correo Electronico:</label>
                <input
                  type="email"
                  class="form-control"                  
                  placeholder="Ingresar Correo Electronico"                  
                  value={this.state.userName}
                  onChange={(event) => {this.updateLoginInfo(event, 'userName')}}             
                />
              </div>
              <div class="form-group">
                <label for="pwd">Contraseña:</label>
                <input
                  type="password"
                  class="form-control"                  
                  placeholder="Ingresar Contraseña"       
                  value={this.state.password}
                  onChange={(event) => {this.updateLoginInfo(event, 'password')}}           
                />
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              {this.props.loginerrorbool ? <h6>Usuario y/o contraseña incorrecta</h6>:null}
              <Button variant="primary" onClick={this.submitLoginForm}>Ingresar</Button>                                                               
            </form>
          </Modal.Body>
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
        this.props.history.push('/');
    });
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
  return /*console.log(state)*/ {
      isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
      loadingAuth: state.authenticationStore.loadingAuth,
      loginerrorbool: state.authenticationStore.loginerrorbool,
      CurrentUser: state.authenticationStore.userLoggedIn,
      uploadMissingObjectState: state.missingObjectStore.uploadMissingObjectState
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
      onUploadMissingObject:(missingObjectData) => dispatch(
          actionCreators.updateMissingObjectAction(missingObjectData)
      )        
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarComponent);
