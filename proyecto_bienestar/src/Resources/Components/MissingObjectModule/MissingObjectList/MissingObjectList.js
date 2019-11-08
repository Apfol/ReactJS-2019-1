import React, { Component } from "react";
import { connect } from 'react-redux';
import classes from "./MissingObjectList.css";
import MissingObject from "../MissingObject/MissingObject";
import SearchFilter from "./SearchFilter";
import NewMissingObject from "../NewMissingObject/newMissingObject"
import * as actionCreators from '../../../../Store/Actions/'; 
import firebase from 'firebase';


class MissingObjectList extends Component {
  state = {
    lgShow: false,
    picture: null,
    newObjectData:
    {
      isFounded: false,
      foundedBy: '',
      foundLocation: '',
      image: '',
      isDelivered: false,
      lostBy: '',
      objectName: ''
    }, 
    objects:[
      {name: "Celular Xyz", location: "Biblioteca", by: "Cristian"},
      {name: "Sombrilla", location: "Atelier 205", by: "Laura"},
      {name: "Celular y", location: "Edificio B-105", by: "Pedro"},
      {name: "Cargador Iphone", location: "Edificio B-204", by: "Leidy"},
      {name: "Cachucha", location: "Biblioteca", by: "Juan"},
      {name: "Botilito", location: "Biblioteca", by: "Felipe"},
      {name: "Chaqueta", location: "Biblioteca", by: "Cristian"},          
    ]
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

          {this.state.lgShow === true ? 
          <NewMissingObject newObjectData = {this.state.newObjectData} getModalStatus = {this.state.lgShow}
                            setLgShow = {this.setLgShow} uploadMissingObjectObjHandleChange = {this.uploadMissingObjectObjHandleChange}
                            submitNewMissingObjectObj = {this.submitNewMissingObjectObj}
                            uploadMissingObjectOnUpload = {this.uploadMissingObjectOnUpload} /> : null}               
      </div>
    );
  }

   handleUpload(event){
     const file = event.target.files[0];
     const storageRef = firebase.storage().ref(`/fotosObjetosPerdidos/${file.name}`);
     const task = storageRef.put(file);

     task.on('state_changed', snapshot => {
       
     }, () => {
       this.setState({
        newObjectData:{
          image:task.snapshot.downloadURL
        }
       });
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
  
  submitNewMissingObjectObj = () => {   
    var objectData = {...this.state.newObjectData}
    console.log(objectData);
    this.props.onUploadMissingObject(objectData);
  
    this.setState({
  
      newObjectData: {
        isFounded: false,
        foundedBy: '',
        foundLocation: '',
        image: null,
        isDelivered: false,
        lostBy: '',
        objectName: ''
      }
    })
  } 
}

const mapStateToProps = state => {
  return /*console.log(state)*/ {
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