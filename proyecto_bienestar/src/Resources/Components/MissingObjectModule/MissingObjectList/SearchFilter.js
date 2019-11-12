import React, { Component } from "react";
import classes from "./SearchFilter.css";


class SearchFilter extends Component {

  
  render() {
    const {handleChange}=this.props;

    return (
      <form className={classes.SearchFilter}>
        <input className={classes.InputValue} onChange={handleChange} value={this.props.value} type="text" placeholder=" Escriba el articulo aca..."  />        
        <select name="Tipo de Busqueda" className={classes.Selector}>
          <option value="Name">Nombre del objeto</option>
          <option value="Location">Lugar de perdida</option>
        </select>
        <button className={classes.Search}>Buscar</button>
      </form>
    );
  }
}

export default SearchFilter;
