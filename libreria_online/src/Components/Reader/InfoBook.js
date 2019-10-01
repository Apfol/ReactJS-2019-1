import React, { Component } from 'react';

class InfoBook extends Component {

    state = {
        name: this.props.name,
        author: this.props.author,
        date: this.props.date,
        isbn: this.props.isbn
    };

    render() {
        return (
            <div id="info-book">
                <h1>Nombre del libro: {this.state.name}</h1>
                <p>Autor: {this.state.author}</p>
                <p>Fecha de Subida: {this.state.date}</p>
                <p>Isbn: {this.state.isbn}</p>
            </div>
        );
    }
}

export default InfoBook;