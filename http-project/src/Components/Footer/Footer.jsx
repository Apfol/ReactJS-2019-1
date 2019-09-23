import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import classes from './Footer.css';

var Footer = () =>{
    return(
        <BrowserRouter>
            <div className={classes.container}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Artist</Link></li>
                        <li><Link to="/extra">Extra</Link></li>
                    </ul>
                </nav>
                <p className={classes.center}>Todos los derechos reservados 2019 &copy;</p>
            </div>

            <Route path="/" exact></Route>
            <Route path="/"></Route>
        </BrowserRouter>
    );
}

export default Footer;