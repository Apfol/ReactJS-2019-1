import React, { Component } from "react";
import {Modal, Button} from "react-bootstrap";
import firebase from '../../../../config/firebase_config';

class NewMissingObject extends Component {

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

  render (){

    return(
    <Modal
      size="lg"
      show={this.getModalStatus}
      onHide={this.setLgShow}
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
    </Modal>)
  }

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
/*var newMissingObject = (props) => {      
      
        return(<Modal
            size="lg"
            show={props.getModalStatus}
            onHide={() => props.setLgShow()}
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
                    value={props.newObjectData.foundedby}
                    onChange={(event) => {props.uploadMissingObjectObjHandleChange(event,'foundedby')}}
                  />
                </div>
                <div class="form-group">
                  <label for="lugarEncontrado">Lugar Donde fue encontrado</label>
                  <input
                    type="text"
                    class="form-control"                  
                    placeholder="¿Donde lo encontró?"       
                    value={props.newObjectData["foundlocation"]}
                    onChange={(event) => {props.uploadMissingObjectObjHandleChange(event,'foundlocation')}}
                  />
                </div>
                <div class="form-group">
                  <label for="objectName">¿Cuál es el objeto perdido?</label>
                  <input
                    type="text"
                    class="form-control"                  
                    placeholder="Nombre del objeto perdido"       
                    value={props.newObjectData["name"]}
                    onChange={(event) => {props.uploadMissingObjectObjHandleChange(event,'name')}}
                  />
                </div>   
                <div class="form-group">
                  <label for="imagen">Imagen del objeto perdido</label>
                  <input
                    type="file"
                    class="form-control"                  
                    placeholder="Selección de imagen"       
                    value={props.newObjectData["image"]}
                    onChange={(event) => {props.uploadMissingObjectOnUpload(event)}}
                  />
                </div>   
                
                <Button variant="primary" onClick={props.submitNewMissingObjectObj}>Ingresar Objeto Perdido</Button>                                                               
              </form>
            </Modal.Body>
          </Modal>)
    }*/   
//<img id = "myimg"/>
export default NewMissingObject

