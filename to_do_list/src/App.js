import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import classes from './App.css';
import Lista from './Lista/Lista';


class App extends Component {


  render(){
    return(
      <div className="App">
        <Lista />
      </div>
    );
  }
}


export default App;
