import React, { Component } from "react";
import { connect } from 'react-redux';
import classes from "./MissingObjectList.css";
import MissingObject from "../MissingObject/MissingObject";
import SearchFilter from "./SearchFilter";
import {Modal, Button} from "react-bootstrap";
import NewMissingObject from "../NewMissingObject/newMissingObject"
import * as actionCreators from '../../../../Store/Actions/'; 
import firebase from '../../../../config/firebase_config';

class MissingObjectList extends Component {
  state = {
    lgShow: false,
    picture: "",
    newObjectData:
    {
      found: false,
      foundedby: '',
      foundlocation:'',
      image:'',
      isDelivered: false,
      lostby: '',
      lostlocation:'',
      name:''

    }, 
    objects:[]    
  }

  setLgShow(){
    this.setState({
      lgShow: !this.state.lgShow
    });  
  }

  getModalStatus(){       
    if(this.state.lgShow){                  
      return true;            
    }
    else{
      return false;
    }
  }

  render() {
    return (      
      <div className={classes.MissingObjectList}>
          <SearchFilter/>
          {this.state.objects.map(object => <MissingObject name = {object.name} location = {object.location} 
         by = {object.by}/>)} 
                       
          <div className = {classes.contenedor}>
            <button className={classes.addMissingObject} onClick={() => this.setLgShow()}>
              <span className={classes.span}>+</span>
            </button>             
          </div>

          <Modal
      size="lg"
      show={this.getModalStatus(1)}
      onHide={() => this.setLgShow()}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Ingresar Objeto Perdido                     
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>            
        <form action="/action_page.php">
          <div class="form-group">
            <label for="encontrado">Encontrado por:</label>
            <input
              type="text"
              class="form-control"                  
              placeholder="¿Quién lo encontró?"                  
              value={this.state.newObjectData.foundedby}
              onChange={(event) => {this.uploadMissingObjectObjHandleChange(event,'foundedby')}}
            />
          </div>
          <div class="form-group">
            <label for="lugarEncontrado">Lugar Donde fue encontrado</label>
            <input
              type="text"
              class="form-control"                  
              placeholder="¿Donde lo encontró?"       
              value={this.state.newObjectData["foundlocation"]}
              onChange={(event) => {this.uploadMissingObjectObjHandleChange(event,'foundlocation')}}
            />
          </div>
          <div class="form-group">
            <label for="objectName">¿Cuál es el objeto perdido?</label>
            <input
              type="text"
              class="form-control"                  
              placeholder="Nombre del objeto perdido"       
              value={this.state.newObjectData["name"]}
              onChange={(event) => {this.uploadMissingObjectObjHandleChange(event,'name')}}
            />
          </div>   
          <div class="form-group">
            <label for="imagen">Imagen del objeto perdido</label>
            <input
              type="file"
              class="form-control"                  
              placeholder="Selección de imagen"       
              value={this.state.newObjectData["image"]}
              onChange={(event) => {this.uploadMissingObjectOnUpload(event)}}
            />
          </div>   
          
          <Button variant="primary" onClick={this.submitNewMissingObjectObj}>Ingresar Objeto Perdido</Button>                                                               
        </form>
      </Modal.Body>
    </Modal>            
      </div>
    );
  }  

  /*newObjectData = {this.state.newObjectData}
                            picture = {this.state.picture}
                            getModalStatus = {this.state.lgShow}
                            setLgShow = {() => this.state.setLgShow} 
                            uploadMissingObjectObjHandleChange = {this.uploadMissingObjectObjHandleChange}
                            submitNewMissingObjectObj = {this.submitNewMissingObjectObj}
                            uploadMissingObjectOnUpload = {this.handleUpload} */ 

   handleUpload = (event) =>{
     
    this.setState({      
      picture: event.target.files[0]
    })
   }

  uploadMissingObjectObjHandleChange = (event, type) => {  
    
    this.setState({
      newObjectData:{
        ...this.state.newObjectData,        
        [type]: event.target.value,
        
      }
    })
    console.log(this.state.newObjectData)
  }
  
  submitNewMissingObjectObj = (file) => {   
    
     
    const storageRef = firebase.storage().ref().child('/Imagenes/' + this.state.picture.name);
    storageRef.put(this.state.picture).then((response) => {
      console.log(response);
    }).catch(error => {                
     console.log(error);
   });

   storageRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:    
  
    // Or inserted into an <img> element:
   
    console.log(url)
    }).catch(function(error) {
        console.log(error)
    });
    
    var objectData = {
      ...this.state.newObjectData,
      image: '/Imagenes/' + this.state.picture.name
    }

    console.log(objectData);
    this.props.onUploadMissingObject(objectData);
  
    this.setState({
  
      newObjectData: {
        found: false,
        foundedby: '',
        foundlocation:'',
        image:'',
        isDelivered: false,
        lostby: '',
        lostlocation:'',
        name:''
      }
    })
  } 
}

const mapStateToProps = state => {
  return {
      uploadMissingObjectState: state.missingObjectStore.uploadMissingObjectState
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onUploadMissingObject:(missingObjectData) => dispatch(
          actionCreators.updateMissingObjectAction(missingObjectData)
      )        
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MissingObjectList);