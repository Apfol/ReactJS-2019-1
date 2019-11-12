import React from "react";
import classes from "./Prestamos.css";
import {InputGroup,FormControl,Button} from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../../../../../Store/Actions/";
import firebase from '../../../../../../Instances/FireBase'
class Prestamo extends React.Component {
  state = {
    Prestamo: {
      elementCod: "",
      sport: "",
      delivered: false,
      returned: false
    }
  };
  componentDidMount(){
    this.setState({
      Prestamo:{
        ...this.props.p
      }
    })
  }
  
 
 

  render() {
    return (
      <div className={classes.prestamo}>
        <h6>{this.props.p.student}</h6>
        <h6>{this.props.p.studentemail}</h6>
        <h6>{this.props.p.sport}</h6>
        
        {this.getButton()}
      </div>
    );
  }
  getButton()
  {
    if(this.props.d == 1)
    {
      return (
        <div>
          <InputGroup size="sm" className="mb-2">          
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Ingrese el codigo del Implemento"      
            onChange = {(event) => this.setState({
              Prestamo:{
                ...this.state.Prestamo,
                elementCod: event.target.value
              }
            }) } 
            value ={this.state.Prestamo.elementCod}
          />
        </InputGroup>        
        <Button variant="success" size="sm" onClick={() => this.setNewState()}>Entregar</Button>
        </div>        
      )
    }
    else
    {
      if(this.props.p.recived == false)
      {
        return (
          <div>    
            <h6>{this.props.p.elementCod}</h6>      
            <Button variant="success" size="sm" onClick={() => this.setNewStateRecived()}>Recibir</Button>
          </div>        
        )
      }      
    }
  }
  setNewState(PrestamoUpdated){    
    var PrestamoUpdated = {
      ...this.props.p,    
      delivered:true
    }
    console.log(PrestamoUpdated)
    this.props.update(PrestamoUpdated)
  }
  setNewStateRecived(PrestamoUpdated){    
    var PrestamoUpdated = {
      ...this.state.Prestamo,
      recived:true
    }
    console.log(PrestamoUpdated)
    this.props.update(PrestamoUpdated)
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
)(Prestamo);
