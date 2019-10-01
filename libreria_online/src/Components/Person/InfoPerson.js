import React, { Component } from 'react';
import classes from './InfoPerson.css';

class InfoPerson extends Component {
    render() {
        return (
            <section className={classes.infoPerson}>
                <header>
                    <img id="img-person" src={"/img/" + this.props.src} alt="" />
                    <h1>{this.props.name}</h1>
                </header>
                <p>Cantidad de Libros: {this.props.bookNum}</p>
                <p>Libros leidos: {this.props.bookR}</p>
            </section>
        );
    }
}

export default InfoPerson;