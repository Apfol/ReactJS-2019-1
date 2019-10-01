import React, { Component } from 'react';
import classes from './Book.css';
import { Link } from 'react-router-dom';

class Book extends Component {
    state = {
        pdfName: this.props.pdfName
    };

    render() {
        return (
            <div className={classes.book_box}>
                <header>
                    <img src={"/img/" + this.props.img} alt="" />
                    <hr />
                    <h1><Link to={"/books/" + this.props.pdfName} onClick={() => this.props.openReader(this.state.pdfName)}>{this.props.name} </Link></h1>
                </header>
                <hr />
                <p>Isbn: {this.props.isbn}</p>
                <p>Autor: {this.props.author}</p>
                <p>Fecha: {this.props.date}</p>
            </div>
        );
    }
}
export default Book;
