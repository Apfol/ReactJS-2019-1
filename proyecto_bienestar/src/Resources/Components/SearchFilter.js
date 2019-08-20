import React, { Component } from "react";
import "./SearchFilter.css";
class SearchFilter extends Component {
  render() {
    return (
      <form className="SearchFilter">
        <input class="InputValue" type="text" placeholder="... Escriba el articulo aca" />        
        <select name="Tipo de Busqueda" className="Selector">
          <option value="Name">Nombre del objeto</option>
          <option value="Location">Lugar de perdida</option>
        </select>
        <button className="Search">Buscar</button>
      </form>
    );
  }
}

export default SearchFilter;
