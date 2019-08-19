import React, { Component } from 'react';

class InfoPerson extends Component {
    render() {
        return (
            <section>
                <header>
                    <img href={this.props.href} alt="" />
                    <h1>{this.props.name}</h1>
                </header>
                <p>Cantidad de Libros: {this.props.bookNum}</p>
                <p>Libros leidos: {this.props.bookR}</p>
            </section>
        );
    }
}

export default InfoPerson;