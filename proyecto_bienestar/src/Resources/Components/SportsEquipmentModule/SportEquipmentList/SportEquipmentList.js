import React, { Component } from "react";
import classes from "./SportEquipmentList.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Module from "../SportsEquipment";

import firebase from "../../../../Instances/FireBase"
import {Tabs, Tab} from "react-bootstrap";
import { connect } from "react-redux";
import Prestamos from '../../SportsEquipmentModule/Admin/ParaEntregar/Prestamos/Prestamos'
import * as actionCreators from "../../../../Store/Actions/";
class SportEquipmentModule extends Component {
  

  state = {
    key:'',
    Prestamos: [],
    Prestamos2: []
  };
  setKey(k){
    this.setState({
      key: k
    })
  }

  componentDidMount() {
    firebase.database().ref('Prestamo/').on('child_changed', this.remove);
  }

  componentWillUnmount() {
    firebase.database().ref('Prestamo/').off('child_changed', this.remove);
  }

  remove = (data) => {
    console.log(data.ref_)    
  }



  componentWillMount(){    

    firebase
      .database()
      .ref("Prestamo")
      .once("value")
      .then((snapshot) => {         
        const posts = Object.values(snapshot.val()).map((post) => {
          return {...post};
        });
        var x = posts.filter((p) => p.delivered == false)
        var y = posts.filter((p) => p.delivered == true)
        this.setState({
          Prestamos: y,
          Prestamos2: x
        })        
      }).catch((error) =>{
        console.log(error)
      });         
  }
  render() {

    return (
      <div className={classes.SportEquipmentList}>
        <Module />
        <Tabs className = {classes.tabs} id="controlled-tab-example" activeKey={this.state.key} onSelect={k => this.setKey(k)}>
      <Tab className = {classes.link} eventKey="Para Entregar" title="ENTREGAR">
        <div className={classes.ParaEntregar}>                
            {this.state.Prestamos2.map((p) => <Prestamos p = {p} update = {(PrestamoUpdated) => this.setNewState(PrestamoUpdated)} d = {1}/>)}
        </div>
      </Tab>
      <Tab className = {classes.link}  eventKey="Para Recibir" title="RECIBIR">
          {this.state.Prestamos.map((p) => <Prestamos p = {p} update = {(PrestamoUpdated) => this.setNewStateRecived(PrestamoUpdated)} d ={2}/>)}
      </Tab>
      
    </Tabs>
      </div>
    );
  }

  setNewState(PrestamoUpdated){        
    console.log(PrestamoUpdated)
    this.props.CreatePrestamo(PrestamoUpdated)
    this.componentWillMount()
  }
  setNewStateRecived(PrestamoUpdated){        
    console.log(PrestamoUpdated)
    this.props.UpdatePrestamo(PrestamoUpdated)
    this.componentWillMount()
  }
}

const mapStateToProps = state => {
  return {
    loadingPrestamo: state.EquipmentStore.loadingCreate,
    p: state.EquipmentStore.Prestamos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CreatePrestamo: DataPrestamo =>
      dispatch(actionCreators.PostPrestamo(DataPrestamo)),
    GetPrestamos : () =>
      dispatch(actionCreators.GetPrestamos()),
    UpdatePrestamo : DataPrestamo =>
    dispatch(actionCreators.UpdatePrestamo(DataPrestamo)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SportEquipmentModule);


