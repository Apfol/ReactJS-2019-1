import React, {Component} from 'react';
import classes from './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import info from './assets/info';
import Profile from './components/Profile/profile';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Login from './components/Login/Login.js';
import axios from 'axios';
import SignUp from './components/SignUp/SignUp.js';
import { Navbar, Nav } from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.mail = React.createRef();
    this.password = React.createRef();

    this.state = {
        usrs: [],
        logged: {},
        isUserActive: false
    }
  }

  componentDidMount(){
    axios.get('https://my-json-server.typicode.com/juanride/myJsonServer/Users')
    .then(response => {
        const users = response.data.map(user => {
            return {
                mail: user.mail,
                password: user.password,
                name: user.name,
                address: user.address,
                phone: user.phone,
                photo: user.photo
            }
        });
        console.log(users);
        this.setState({
          usrs : users
        });
    });
  }

  render(){
    return (
      
      <BrowserRouter>
      <div style={{height: '100%'}}>
      <Navbar className={classes.nav_colour} bg="light" expand="lg">
          <Navbar.Brand className = {classes.brand}>  
              <span className = {classes.brand}> <b>Κοῖος</b> </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {this.checkOptions()}
        </Navbar>

            <main>
                    <Route exact path="/" render = {props => <Login {...props} updateActiveUser = {this.updateActiveUser} data = {this.state}/>}/>
                    <Route exact path="/profile" render={props => <Profile {...props} profile = {this.state.logged}/>}/>
                    <Route exact path="/home" render={props => <Home {...props} info = {info} valid = {this.state.isUserActive}/>} />
                    <Route exact path="/categories/:idCategory" render={props => <Category {...props} categoriesList = {info.categories}/>}/>
                    <Route exact path="/signUp" render={props => <SignUp {...props} users = {this.state.usrs} signUp = {this.signUp}/>} />
            </main> 
      </div>
      </BrowserRouter>
  )};

  checkOptions = () =>{
    if (this.state.isUserActive) {
        return(
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="mr-right">
                    <Link className = {classes.option} to= {`/home`}>Home</Link>
                    <Link className = {classes.option} to= {`/shopping_cart`}>Shopping cart</Link>
                    <Link className = {classes.option} to= {`/profile`}>Profile</Link>
                    <Link className = {classes.option} to= {`/chat_room`}>Chat room</Link>
                    <Link onClick={this.logOut} className = {classes.option} to= {`/`}>Log out</Link>
            </Nav>
          </Navbar.Collapse>
        )
    }
  }

  updateActiveUser = (user) =>{
    this.setState({
      logged : user,
      isUserActive : true
    })
  }

  logOut = () =>{
    this.setState({
      logged : {},
      isUserActive : false
    })
  }


  signUp = (newData) => {
    this.setState({
        ...newData
    });
  }
}

export default App;
