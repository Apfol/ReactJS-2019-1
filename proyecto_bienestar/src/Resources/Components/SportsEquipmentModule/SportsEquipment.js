import React from "react";
import classes from "./sportsEquipment.css";
import {Form} from "react-bootstrap";
class SportsEquipment extends React.Component {
  state = {
    Prestamo:{
      student: '',
      elementCod:'',      
      sport:'',
      delivered: false,
      returned: false
    }    
  };  

  render() {
    return (
      <div className={classes.pContainer}>
        <h2 className={classes.pTitle}>Prestamo de Equipo Deportivo</h2>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>Tenis</option>
              <option>Futbol</option>
              <option>Boleiboll</option>
              <option>Futsal</option>
              <option>PinPong</option>
              <option>Ajedrez</option>
            </Form.Control>
          </Form.Group>         
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SportsEquipment;
