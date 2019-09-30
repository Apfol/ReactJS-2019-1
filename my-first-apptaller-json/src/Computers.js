import React from 'react';
import { Component } from 'react';
import axios from './axiosInstance'
import Computer from './Computer'


class Computers extends Component {

  state = {
    computers: [],
  }

  componentDidMount() {
    axios.get("/computers")
      .then(response => {
        this.setState({
          computers: response.data,
        });
      })


  }

  renderComputers() {
    return (
      <div>
        {this.state.computers.map(computer => <Computer computerName={computer.name} computerSpecs={computer.specs} computerImage={computer.imageC}/>)}
      </div>
    );
  }



  render() {
    return (
      <div>
      <h1>Computers</h1>
      {this.renderComputers()}
      </div>
    );
  }


}

export default Computers;