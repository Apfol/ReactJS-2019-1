import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
class App extends Component {

  constructor () {
    super()
    this.state={
      username:'',
      email:'',
      company:'', 
      followers:'',
      public_repos:'',
      following:'',
      avatar_url:'',
      blog:'',
      login:'',
      created_at:''


    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    axios.get('https://api.github.com/users/indigoshakti47')
    .then(response => this.setState({username: response.data.name, email: response.data.bio, company: response.data.company, followers: response.data.followers, public_repos: response.data.public_repos, following: response.data.following, avatar_url:response.data.avatar_url, blog:response.data.blog, login: response.data.login, created_at: response.data.created_at
    }))
  }

  render () {
    return (
      <div className='button__container'>
      <button className='button' onClick={this.handleClick}>
        Click para revelar usuario del mes
      </button>
      <p>Nombre = {this.state.username}</p>
      <p>Email = {this.state.email}</p>
      <p>Empresa = {this.state.company}</p>
      <p>Seguidores = {this.state.followers}</p>
      <p>Numero de repositorios = {this.state.public_repos}</p>
      <p>Siguiendo = {this.state.following}</p>
      <p> Avatar = {this.state.avatar_url}</p>
      <p> LinkedIn = {this.state.blog}</p>
      <p>Usuario = {this.state.login}</p>
      <p> Fecha de creación = {this.state.created_at}</p>

    </div>
    )
  }
}
export default App