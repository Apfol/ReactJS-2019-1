import React, { Component } from 'react';
import List from './List';
import './App.css';
import axios from 'axios';



class App extends Component {

  ejecutapeticion = () => {
    var posts = [];

  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>
    {
      const entradas = response.data.slice(0,4);
     console.log(entradas);
    });
  }

  render() {
    // en este proyecto aparecia un error funcional: react siempre eliminaba la ultima tarea, pero era porque faltaba
    // un key para cada elemento en el array de tareas, ya que react no sabia que se actualizó o eliminó
    return (
      <>
        <List />
        <button onClick={this.ejecutapeticion}>Ejecutar</button>
      </>
    );
  }
}

export default App;
