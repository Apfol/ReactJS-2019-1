import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person.js'

class App extends Component {
  state = {
    persons:[
      {name: "Cristian", age: "25"},
      {name: "Camilo", age: "20"},
      {name: "Sofia", age: "29"},
      {name: "Carlos", age: "21"}
    ],
    test:"test"
  }

  greet="Hello World!"

  componentDidMount(){

    setTimeout(() => {
      this.changeState()
    },5000)
  }

  render(){
    return (
      <div>
        <h1>{this.greet}</h1>
        {this.state.persons.map(person => <Person name={person.name} age={person.age}/>)}
        <button onClick={this.changeState}>Change</button>
      </div>      
    )
  }
  
  changeState(){

    const newPersons=[
      {name: "Luisa", age: "25"},
      {name: "Jordan", age: "22"},
      {name: "Bryan", age: "15"},
      {name: "Juan", age: "5"}
    ]

    this.setState({
      persons: newPersons
    },console.log(this.state))

  }
}

export default App;
