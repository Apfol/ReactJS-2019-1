import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {



  render() {
    // en este proyecto aparecia un error funcional: react siempre eliminaba la ultima tarea, pero era porque faltaba
    // un key para cada elemento en el array de tareas, ya que react no sabia que se actualizó o eliminó
    return (
      <>
        <List />
      </>
    );
  }
}

export default App;
