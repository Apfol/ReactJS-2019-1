import React from "react";
import classes from "./Prestamos.css";
import {InputGroup,FormControl,Button} from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreators from "../../../../../../Store/Actions/";

class Prestamo extends React.Component {
  state = {
    Prestamo: {
      elementCod: "",
      sport: "",
      delivered: false,
      returned: false
    }
  };

  render() {
    return (
      <div className={classes.prestamo}>
        <h6>{this.props.p.student}</h6>
        <h6>{this.props.p.studentemail}</h6>
        <h6>{this.props.p.sport}</h6>
        <InputGroup size="sm" className="mb-2">          
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Ingrese el codigo del Implemento"            
          />
        </InputGroup>
        <Button variant="success" size="sm">Entregar</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingPrestamo: state.EquipmentStore.loadingCreate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CreatePrestamo: DataPrestamo =>
      dispatch(actionCreators.PostPrestamo(DataPrestamo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Prestamo);
