import React, { Component } from 'react';
import NavigationHeader from './navigation-header/NavigationHeader';
import axios from './axiosInstance';
import PersonCards from './person-cards/PersonCards';

export default class App extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    axios.get('/users')
      .then(response => {
        var updatedUsers = response.data;
        updatedUsers = updatedUsers.map(user => {
          return {
            username: user.username,
            name: user.name,
            email: user.email,
          }
        });
        console.log(updatedUsers);
        this.setState({
          users: updatedUsers,
        });
      })
      .catch(error => {
      });
  }
  
  render() {
    return (
      <div>
        <header>
          <NavigationHeader></NavigationHeader>
        </header>
        <PersonCards
          users={this.state.users}  
        />
      </div>
    )
  }
}