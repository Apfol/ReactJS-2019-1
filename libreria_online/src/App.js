import React, { Component } from 'react';
import Book from './Book';
import Column from './Column';
import './App.css';
import InfoPerson from './InfoPerson';

class App extends Component {
  constructor(props) {
    super(props);
    this.books = [];
    this.infoPerson = [];
  }

  infoPerson = { href: "", name: "Juan", bookNum: 23, bookR: 11 };
  books = [
    { name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "logo192.png", alt: "algo" },
    { name: 'Libro 2', isbn: 2, author: 'autor2', date: 'date2', img: "logo192.png", alt: "algo" },
    { name: 'Libro 3', isbn: 3, author: 'autor3', date: 'date3', img: "logo192.png", alt: "algo" },
    { name: 'Libro 4', isbn: 4, author: 'autor4', date: 'date4', img: "logo192.png", alt: "algo" },
    { name: 'Libro 5', isbn: 5, author: 'autor5', date: 'date5', img: "logo192.png", alt: "algo" },
  ];

  state = {
    columns: [
      <Column id="left-column" personInfo={<InfoPerson href={this.infoPerson.href} name={this.infoPerson.name} bookNum={this.infoPerson.bookNum} bookR={this.infoPerson.bookR} />} />,
      <Column id="right-column" booksRenderized={this.renderingBooks()} />
    ]

  }
  render() {
    return (
      this.state.columns
    );
  }

  renderingBooks() {
    return (
      this.books.map(
        book => <Book img={book.img} name={book.name} isbn={book.isbn} author={book.author} date={book.author} alt={book.alt} />
      )
    );
  }

}

export default App;

