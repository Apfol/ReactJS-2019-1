import React, { Component } from 'react';

class InfoBook extends Component {
    render() {
        return (
            <div id="info-book">
                <h1>Nombre del libro: {this.props.name}</h1>
                <p>Autor: {this.props.author}</p>
                <p>criticas: {this.props.criticism}</p>
                <p>Resumen: {this.props.summary}</p>
            </div>
        );
    }
}

export default InfoBook;