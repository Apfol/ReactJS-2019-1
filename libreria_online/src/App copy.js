import React, { Component } from 'react';
import Book from './Book';
import './App.css';
import Column from './Column';

const Columns = (
  <>
      <Column id="left-column" />
      <Column id="right-column" />
  </>
);



class App extends Component {
  state = {
    books: [
      { name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "logo192.png", alt: "algo" },
      { name: 'Libro 2', isbn: 2, author: 'autor2', date: 'date2', img: "logo192.png", alt: "algo" },
      { name: 'Libro 3', isbn: 3, author: 'autor3', date: 'date3', img: "logo192.png", alt: "algo" },
      { name: 'Libro 4', isbn: 4, author: 'autor4', date: 'date4', img: "logo192.png", alt: "algo" },
      { name: 'Libro 5', isbn: 5, author: 'autor5', date: 'date5', img: "logo192.png", alt: "algo" },
    ],
    info:[href="", name="Juan", bookNum=6, bookR=11]
  }
  render() {
    return(
        this.state.books.map(
          book => <Book img={book.img} name={book.name} isbn={book.isbn} author={book.author} date={book.author} alt={book.alt} />)
    );
  }
  }

export default App;

