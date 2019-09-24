import React, { Component } from 'react';
import './App.css';
import Person from "./Person";




class App extends Component {


  state = {
    contactos: [],
    loading: false
  }

  setContactos = () => {
    this.setState({
      loading: true
    });


    fetch("https://my-json-server.typicode.com/juanvalag/data/persons")
      .then(response => {
        return (response.json());
      })
      .then(data => {
        this.persons = data.map(persondata => {
          let last_name = "";
          if (persondata.last_name) {
            last_name = persondata.last_name;
          }
          return (<Person key={persondata.id} name={persondata.name} last_name={last_name} phone={persondata.phone} />);
        });
        this.setState({
          loading: false,
          contactos: this.persons
        });
      });


  }

  render() {
    let content;
    if (this.state.loading) {
      content = <h2>Loading...</h2>;
    } else {
      content = this.state.contactos;
    }
    return (
      <div className="App">
        <header>
          <h1>Lista de contactos</h1>
        </header>
        <section id="list">
          {content}
        </section>
        <section>
          <button onClick={this.setContactos}>Traer contactos</button>
        </section>

      </div>
    );
  }

}

export default App;
