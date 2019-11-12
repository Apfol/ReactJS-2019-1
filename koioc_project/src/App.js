import React, {Component} from 'react';
import classes from './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Profile from './components/Profile/profile';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Login from './components/Login/login.js';
import SignUp from './components/SignUp/SignUp.js';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.js';
import ServiceHistory from './components/ServiceHistory/ServiceHistory.js';
import cart from './assets/images/carrito-de-compras.png';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions/';
import axios from 'axios';
import Notifications from 'react-notify-toast';

class App extends Component{

  state = {
    info: [
      {
        categories : [],
        comments : []
      }
    ]
  }

  componentWillMount(){
    this.props.onPersistAuthentication();
  }

  componentDidMount () {
    axios.get('https://koioc-23ec2.firebaseio.com/categories.json')
    .then(response  => {
      this.setState({
        info:{
          categories: response.data,
          comments : this.state.info.comments
        }
      })  
    });

    axios.get('https://koioc-23ec2.firebaseio.com/comments.json')
    .then(response  => {
      this.setState({
        info:{
          categories : this.state.info.categories,
          comments: response.data
        }
      })  
    });
  }

  componentDidUpdate(){
    this.props.onPersistShoopingCart(this.props.userLoggedIn.uid);
  }


  render(){
    return (
      <BrowserRouter>
        <div className={classes.container} style={{height: '100%'}}>
          <Navbar className={classes.nav_colour} bg="light" expand="lg">
            <Navbar.Brand className = {classes.brand}>  
                <Link className={classes.link} to={'/home'}>
                  <span className = {classes.brand}> <b>Κοῖος</b> </span>
                </Link>
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {this.checkOptions()}
          </Navbar>
          <main>
                  <Route exact path="/" render = {props => <Login {...props}/>}/>
                  <Route exact path="/profile" render={props => <Profile {...props} />}/>
                  <Route exact path="/home" render={props => <Home {...props} info={this.state.info}/>} />
                  <Route exact path="/categories/:idCategory" render={props => <Category {...props} categoriesList = {this.state.info.categories}/>
                  }/>
                  <Route exact path="/signUp" render={props => <SignUp {...props} />} />
                  <Route exact path="/shoppingCart" render={props => <ShoppingCart info={this.state.info} {...props}/> } />
                  <Route exact path="/serviceHistory" render={props => <ServiceHistory {...props}/> } />
          </main> 
          <Notifications />

        </div>
      </BrowserRouter>
  )};

  checkOptions = () =>{
    if (this.props.isUserLoggedIn) {
        return(
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className="mr-right">
                    <Link className = {classes.option} to= {`/home`}>Home</Link>
                    <Link className = {classes.option} to= {`/profile`}>Profile</Link>
                    <Link className = {classes.option} to= {`/serviceHistory`}>My services</Link>
                    <Link className = {classes.option} to= {`/shoppingCart`}>
                      <img className = {classes.cart} alt="cart" src={cart}></img>Cart
                    </Link>
                    <Link className = {classes.option} onClick={this.signOut} to= {`/`}>Log out</Link>
            </Nav>
          </Navbar.Collapse>
        )
    }
  }

  signOut = () => {
    this.props.onLogOut();
  }
}

const mapStateToProps = state => {
  return {
      isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
      error: state.authenticationStore.error,
      userLoggedIn: state.authenticationStore.userLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPersistAuthentication: () => dispatch( actionCreators.persistAuthentication() ),
    onLogOut: () => dispatch(actionCreators.logOutData()),
    onPersistShoopingCart: (uid) => dispatch(actionCreators.fetchCart(uid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
