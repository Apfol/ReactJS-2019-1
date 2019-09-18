import React from 'react';
import './Header.css';


function Header(props) {
    return (
        <div id="page-wrapper" >
            <div id="header-wrapper">
                <header>
                    <div id="logo" >
                        <img alt="" src="papel-airplane-icon.png" />
                        <img id="logo-name" alt="" src="readme-name.png" />
                    </div>

                    <nav>
                        <ul className="ulnav">
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
        </div>);
}

export default Header;