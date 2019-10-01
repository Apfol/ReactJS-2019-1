import React from 'react';
import classes from './NavigationBar.css';
import { Link } from 'react-router-dom';


function NavigationBar(props) {
    let userNav = "";
    if (props.userNav) {
        userNav = props.userNav;
    }
    return (
        <div id="header-wrapper" className={classes.wrapper}>
            <header className={classes.header}>
                <div className={classes.logo} >
                    <img alt="" src="img/papel-airplane-icon.png" />
                    <img className={classes.logo_name} alt="" src="img/readme-name.png" />
                </div>

                <nav className={classes.nav}>
                    <ul className={classes.ulnav}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/">Top Libros</Link>
                        </li>
                        <li>
                            <Link to="/session/sign-in">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <input type="text" placeholder="¿Qué estás buscando?" />
                        </li>
                        <li>
                            <a href="/">Sobre Nosotros</a>
                        </li>
                    </ul>
                </nav>
            </header>
            {userNav}
        </div>
    );
}

export default NavigationBar;