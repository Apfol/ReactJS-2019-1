import React, {Component} from 'react';
import menu from './Menu.css';
import logo from '../../img/menu/logo2.png'

class Menu extends Component{
    render(){
        return(
            <div className={menu.navigation}>
            <div className={menu.navigation_wrap}>
            <img className={menu.logo} src={logo} alt=""></img>
            <div className={menu.menu}>
            <nav className={menu.navigation_items}>
            <a className={menu.navigation_item} href="/">HOME</a>
            <a className={menu.navigation_item} href="/">WORK</a>
            <a className={menu.navigation_item} href="/">TEAM</a>
            <a className={menu.navigation_item} href="/">BLOG</a>
            <a className={menu.navigation_item} href="/">CONTACT</a>
            </nav>
                       
            <div className={menu.button}>
            <input type="text" placeholder="Search..."></input>
            <div className={menu.searchButton}></div>
           </div>
            <div className={menu.button}>
            <div className={menu.user}></div>
            </div>

            </div>
            </div>
            </div>
  



        //    <div className={menu.menu}>

        //    <div className={menu.items}>
        //    <ul>
        //    <li className={menu.curvery}><img src={logo} alt="logo"></img></li>
        //    <li>Home</li>
        //    <li>Cursos</li>
        //    <li>Proyectos</li>
        //    </ul>
        //    </div>

        //    <div className={menu.user}>
        //    <div className={menu.userButton}></div>
        //    </div>

       // <div className={menu.searchBar}>
       // <input type="text" placeholder="Search..."></input>
       // <div className={menu.searchButton}></div>
       // </div>

        //    </div>
        )
    }
}

export default Menu;