import React, {Component} from 'react';

class Book extends Component {
   
    render() {
        return (
            <div id="box">
                <header>
                    <img src={this.props.img} alt={this.props.alt} />
                    <hr />
                    <h1>{this.props.name}</h1>
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
