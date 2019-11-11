import React from "react";
import classes from "./sportsEquipment.css";
import {Form, ProgressBar, Button} from "react-bootstrap";
import { connect } from 'react-redux';
import axios from "../../../Instances/axios-sportequipment";
import * as actionCreators from '../../../Store/Actions/';
class SportsEquipment extends React.Component {
  state = {
    Prestamo:{          
      elementCod:'',            
      sport:'',
      delivered: false,
      returned: false
    },
    SportSelected: '',
    Percentage: 0
  };  

  render() {
    return (
      <div className={classes.pContainer}>
        <h2 className={classes.pTitle}>Prestamo de Equipo Deportivo</h2>
        <Form>          
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Deporte</Form.Label>
            <Form.Control value={this.state.SportSelected} 
            onChange={(event) =>this.getPorcentage(event)} as="select">
              <option></option>
              <option>Tenis</option>
              <option>Futbol</option>
              <option>Boleiboll</option>
              <option>Futsal</option>
              <option>PinPong</option>
              <option>Ajedrez</option>
            </Form.Control>
            <Form.Text className="text-muted">
            Escoge el deporte que quieres realizar 
          </Form.Text>
          </Form.Group>
          {this.state.SportSelected == '' ?
          null : 
          <div>
            <ProgressBar striped variant="danger" now={this.state.Percentage} />             
            
            <Button className={classes.ButtonPedir} 
             onClick={() => this.props.CreatePrestamo(this.state.Prestamo)}
             variant="success">Pedir implemento</Button>
          </div>          
          }      
          
        </Form>
      </div>
    );
  }
  getPorcentage(event){
    this.setState({
      ...this.state,
      Prestamo:{
        ...this.state.Prestamo,
        sport:event.target.value
      },
      SportSelected:event.target.value
    })
    axios.get('/Sport/' + event.target.value + '.json')
    .then((r) => {
      
      var percent = (r.data.Count / r.data.Total) * 100      
      this.setState({
        ...this.state,
        Percentage: percent
      })
    }).catch((error) => {
      console.log(error)
    })
  }
    

}
const mapStateToProps = state => {
  return {
      loadingPrestamo: state.EquipmentStore.loadingCreate
  }
}

const mapDispatchToProps = dispatch => {
  return {
      CreatePrestamo: (DataPrestamo) => dispatch(
          actionCreators.PostPrestamo(DataPrestamo)
      ) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SportsEquipment);
