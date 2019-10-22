import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import  BtnSave from './components/BtnSaveCounter/BtnSaveCounter';
import  ItemsList from './components/ItemsList/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <BtnSave></BtnSave>
       <ItemsList></ItemsList>
      </div>
    );
  }
}

export default App;
