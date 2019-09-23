import React from 'react';
import { Component } from 'react';
import axios from '../axiosInstance'
import User from './User'


class Users extends Component {

  state = {
    users: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    axios.get("/users")
      .then(response => {
        //console.log(response);
        this.setState({
          users: response.data,
          loading: false
        });
      })

  }

  renderUsers() {
    return (
      <div>
        {this.state.users.map(user => <User key={user.id} firstName={user.first_name} lastName={user.last_name} money={user.money} phone={user.phone} />)}

      </div>
    );
  }

  renderLoading(){
    return(
      <h1>Loading Users</h1>
    )
  }


  render() {
    return (
      <div>
      <h1 style={{ color: 'white' }}>List of Users with Bank Account</h1>
      {this.state.loading ? this.renderLoading() : this.renderUsers() }
      </div>
    );
  }


}

export default Users;
