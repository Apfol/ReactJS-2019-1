import React from 'react';
import { NavLink } from 'react-router-dom';
import {auth} from '../../../services/firebase';
import {connect} from 'react-redux';
//icons
import close from './style/close-button.svg';
import open from './style/burger-menu.svg';
//style
import NavBar from './style/Navbar.css';

const Navbar = ({ currentUser }) => {
    // const overlay = document.getElementById('overlay');

    // const blanco = NavBar.show_menu;
    function showMenu(){
        console.log('pero');
        var elemento = document.getElementById("overlay");
        // elemento.classList.add('NavBar.show_menu');

        elemento.className += 'NavBar.nav NavBar.show_menu';
    }
    function closeMenu(){
        console.log('pero');
        var elemento = document.getElementById("overlay");
        // elemento.classList.add('NavBar.show_menu');

        elemento.className -= 'NavBar.nav NavBar.show_menu';
    }
    return (
      <div className={NavBar.navbar}>
        <nav className={`${NavBar.nav}`} id="overlay">
        <img src={close} alt="menu"  onClick={closeMenu} className={NavBar.close_button} id="close-menu"></img>
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
        <NavLink to='/sign-up' onClick={showMenu} className={NavBar.logo}>MySite</NavLink>
        <img src={open} alt="menu" onClick={showMenu} className={NavBar.menu_btn} id="open-menu"></img>
        </header>
      </div>
    );
  };
  
const mapStateToProps = state => ({currentUser: state.auth.currentUser});
  
  export default connect(mapStateToProps,null)(Navbar);