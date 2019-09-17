import React from 'react';
import classes from './Footer.css'

var Footer = () =>{
    return(
        <div className={classes.container}>
            <p>Juan David Murillo</p>
            <p>Universidad de La Sabana</p>
            <p>Todos los derechos reservados &copy;</p>
        </div>
    );
}

export default Footer;