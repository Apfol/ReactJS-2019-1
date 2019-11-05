import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import {auth} from '../../../services/firebase';
import {connect} from 'react-redux';
//icons
import close from './style/close-button.svg';
import open from './style/burger-menu.svg';
//style
import NavBar from './style/Navbar.css';

const Navbar = ({ currentUser }) => {
   
    // const [count, setCount] = useState(0);
    function showMenu(){
        console.log('pero');
        var hoja = document.getElementsByTagName("nav")
        // hoja.innerHTML = ".nav {border: 2px solid black; background-color: blue;}";
        // document.body.appendChild(hoja);
        // hoja.classList.remove("foo");
    }
        const [menuActive, setMenuState] = useState(false);
    
    return (
      <div className={NavBar.navbar}>
        <nav className={`${NavBar.nav} ${menuActive ? "yellow" : ""}`} id="overlay">
        <img src={close} alt="menu" className={NavBar.close_button} id="close-menu"></img>
        <ul className={NavBar.ul}>
            <li>
                <NavLink className={NavBar.link} to='/'>Home</NavLink>
                <span className={NavBar.span} >Watch out, This is my site</span>
            </li>
            <li>
                <NavLink className={NavBar.link} to='/sign-in'>Sign In</NavLink>
                <span className={NavBar.span} >Watch out, This is my site</span>
            </li>
            <li>
                <NavLink className={NavBar.link} to='/sign-up'>Sign Up</NavLink>
                <span className={NavBar.span}>Watch out, This is my site</span>
            </li>
            {currentUser && currentUser ? (
            <li>
                <button onClick={()=> auth.signOut()}>Sign out</button>
            </li>
            ) : null}

            <li>
            <NavLink className={NavBar.link} to='/sign-up'>About Me</NavLink>
            <span className={NavBar.span}>Watch out, This is my site</span>
            </li>

            <li>
            <NavLink className={NavBar.link} to='/sign-up'>Services</NavLink>
            <span className={NavBar.span}>Watch out, This is my site</span>
            </li>

            <li>
            <NavLink className={NavBar.link} to='/sign-up'>Contact</NavLink>
            <span className={NavBar.span}>Watch out, This is my site</span>
            </li>
        </ul>
        </nav>
        <header className={NavBar.header}>
        <NavLink to='/sign-up' onClick={showMenu} className={`${NavBar.logo} ${menuActive ? "yellow" : ""}`}>My Logo</NavLink>
        <img src={open} alt="menu" onClick={() => setMenuState(!menuActive)} className={NavBar.menu_btn} id="open-menu"></img>
        </header>
      </div>
    );
  };
  
const mapStateToProps = state => ({currentUser: state.auth.currentUser});
  
  export default connect(mapStateToProps,null)(Navbar);