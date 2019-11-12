import React, { Component } from "react";
import { connect } from 'react-redux';
import classes from "./MissingObjectList.css";
import MissingObject from "../MissingObject/MissingObject";
import SearchFilter from "./SearchFilter";
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

          {this.state.lgShow === true ? 
          <NewMissingObject newObjectData = {this.state.newObjectData}
          picture = {this.state.picture}
           getModalStatus = {this.state.lgShow}
                            setLgShow = {this.setLgShow} uploadMissingObjectObjHandleChange = {this.uploadMissingObjectObjHandleChange}
                            submitNewMissingObjectObj = {this.submitNewMissingObjectObj}
                            uploadMissingObjectOnUpload = {this.handleUpload} /> : null}               
      </div>
    );
  }  

   handleUpload = (event) =>{
     
    this.setState({      
      picture: event.target.files[0]
    })
      
    /* const task = storageRef.put(file);

     console.log("Hola" + file) 
     if(this.state !== undefined){
      this.setState({
        newObjectData:{
          ...this.state.newObjectData,        
          image:task.snapshot.downloadURL          
        }        
     })
     }*/
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
    var img = document.getElementById('myimg');
    img.src = url;
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