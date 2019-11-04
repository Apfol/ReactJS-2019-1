import React from 'react';
import { Component } from 'react';
import axios from './axiosInstance'
import Color from './Color'


class Colors extends Component {

  state = {
    colors: [],
  }

  componentDidMount() {
    axios.get("/colors")
      .then(response => {
        this.setState({
          colors: response.data,
        });
      })

  }

  renderColors() {
    return (
      <div>
        {this.state.colors.map(color => <Color colorName={color.name} colorValue={color.value} />)}
      </div>
    );
  }



  render() {
    return (
      <div>
      <h1>Colors</h1>
      {this.renderColors()}
      </div>
    );
  }


}

export default Colors;