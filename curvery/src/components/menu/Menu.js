import React from 'react';
import menu from './Menu.css';
import logo from '../../img/menu/logo2.png'
import SearchBar from '../searchBar/SearchBar';
import {Link, withRouter} from 'react-router-dom';

function Menu(props) {
    const {history}=props;

    function onFormSubmit(termSearch){
        termSearch.preventDefault();
        console.log(termSearch);
    }
    return(
        <div>
        <div className={menu.navigation}>
        <div className={menu.navigation_wrap}>
        <img className={menu.logo} src={logo} alt=""></img>
        <div className={menu.menu}>
        <nav className={menu.navigation_items}>
        <li className={menu.navigation_item}><Link to="/">HOME</Link></li>
        <li className={menu.navigation_item}><Link to="/user">USER</Link></li>
        <li className={menu.navigation_item}><Link to="/login">LOGIN</Link></li>
        <li className={menu.navigation_item}><Link to="/sign_up">SIGN UP</Link></li>
        </nav>
        <SearchBar onFormSubmit={onFormSubmit}></SearchBar>
        
        </div>
        </div>
        </div>
        
        <div className={menu.buttons_navigation}>
        <button onClick={() => history.goBack() }>ATRAS</button>
        <button onClick={() => history.goForward()}>ADELANTE</button>
        </div>
        </div>
        )
    }
    

export default withRouter(Menu);