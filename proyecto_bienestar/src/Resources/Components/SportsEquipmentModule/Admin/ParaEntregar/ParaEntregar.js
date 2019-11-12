import React, { Component } from "react";
import classes from "./ParaEntregar.css";
import firebase from '../../../../../Instances/FireBase'
import { connect } from "react-redux";
import * as actionCreators from "../../../../../Store/Actions/";
import Prestamos from "./Prestamos/Prestamos";

class ParaEntregar extends Component {

  state = {
     Prestamos:this.props.Prestamos
  }
  

  RemovePrestamo = (data) => {
    const comment = data.val()
    alert(data.val())
    for( var i = 0; i < this.state.Prestamos.length; i++){ 
        if (this.state.Prestamos[i].props.p.UID === comment.UID) {
            this.state.Prestamos.splice(i, 1); 
        }
     }
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }
  

  componentWillMount(){
    this.props.GetPrestamos()   
    firebase
      .database()
      .ref("Prestamo")
      .once("value")
      .then((snapshot) => {
        
        const posts = Object.values(snapshot.val()).map((post) => {
          return {...post};
        });
        var y = posts.filter((p) => p.delivered == false)
        this.setState({
          Prestamos: y
        })        
      });   
      
  }

  
  render() {    
    return (
      <div className={classes.ParaEntregar}>                
          {this.state.Prestamos.map((p) => <Prestamos p = {p} update = {(PrestamoUpdated) => this.setNewState(PrestamoUpdated)}/>)}
      </div>
    );  
  }

  setNewState(PrestamoUpdated){        
    console.log(PrestamoUpdated)
    this.props.CreatePrestamo(PrestamoUpdated)
    this.componentWillMount()
  }
}

const mapStateToProps = state => {
  return {
    loadingPrestamo: state.EquipmentStore.loadingCreate,
    Prestamos: state.EquipmentStore.Prestamos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CreatePrestamo: DataPrestamo =>
      dispatch(actionCreators.PostPrestamo(DataPrestamo)),
    GetPrestamos : () =>
      dispatch(actionCreators.GetPrestamos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParaEntregar);