import React from 'react';
import menu from './Menu.css';
import logo from '../../img/menu/logo2.png'
import SearchBar from '../searchBar/SearchBar';
import {Link, withRouter} from 'react-router-dom';

function Menu(props) {
    const {history}=props;
    
    
    
    function onFormSubmit(termSearch){
        console.log(termSearch);
    }
    return(
                <div className={menu.navigation}>
                <div className={menu.navigation_wrap}>
                <img className={menu.logo} src={logo} alt=""></img>
                <div className={menu.menu}>
                <nav className={menu.navigation_items}>
                <li className={menu.navigation_item}><Link to="/home">HOME</Link></li>
                <li className={menu.navigation_item}><Link to="/user">user</Link></li>
                <li className={menu.navigation_item}><button onClick={() => history.push('/user')}>user prro</button></li>
                <li className={menu.navigation_item}><Link>HOME</Link></li>
                <li className={menu.navigation_item}><Link>HOME</Link></li>
                </nav>
                <SearchBar onFormSubmit={onFormSubmit}></SearchBar>

                </div>
                </div>
                </div>
      
    )
            }


export default withRouter(Menu);