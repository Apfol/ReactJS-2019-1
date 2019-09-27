import React from 'react';
import { Component } from 'react';
import axios from '../axiosInstance'
import Client from './Client'


class Clients extends Component {

  state = {
    clients: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    axios.get("/clients")
      .then(response => {
        //console.log(response);
        this.setState({
          clients: response.data,
          loading: false
        });
      })

  }

  renderClients() {
    return (
      <div>
        {this.state.clients.map(client => <Client key={client.id} firstName={client.first_name} lastName={client.last_name} email={client.email} city={client.city} />)}

      </div>
    );
  }

  renderLoading(){
    return(
      <h1>Loading clients</h1>
    )
  }


  render() {
    return (
      <div>
      <h1 style={{ color: 'white' }}>List of clientt</h1>
      {this.state.loading ? this.renderLoading() : this.renderClients() }
      </div>
    );
  }


}

export default Clients;