import React from 'react';
import classes from './NavigationBar.css';


function NavigationBar(props) {
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
                            <a href="index.html">Inicio</a>
                        </li>
                        <li>
                            <a href="index.html">Top Libros</a>
                        </li>
                        <li>
                            <a href="index.html">Iniciar Sesión</a>
                        </li>
                        <li>
                            <input type="text" placeholder="¿Qué estás buscando?" />
                        </li>
                        <li>
                            <a href="index.html">Sobre Nosotros</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default NavigationBar;