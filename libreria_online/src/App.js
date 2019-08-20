import React, { Component } from 'react';
import Book from './Book';
import Column from './Column';
import './App.css';
import InfoPerson from './InfoPerson';
import ReaderTools from './ReaderTools';
import Page from './Page';
import InfoBook from './InfoBook';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataBooks = [];
    this.infoPerson = [];
    this.columns = [];
  }

  infoPerson = { src: "person.png", name: "Juan", bookNum: 23, bookR: 11 };
  dataBooks = [
    { name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "logo192.png", alt: "algo", criticism: "", summary: "" },
    { name: 'Libro 2', isbn: 2, author: 'autor2', date: 'date2', img: "logo192.png", alt: "algo" },
    { name: 'Libro 3', isbn: 3, author: 'autor3', date: 'date3', img: "logo192.png", alt: "algo" },
    { name: 'Libro 4', isbn: 4, author: 'autor4', date: 'date4', img: "logo192.png", alt: "algo" },
    { name: 'Libro 5', isbn: 5, author: 'autor5', date: 'date5', img: "logo192.png", alt: "algo" },
  ];

  pagesTemp = ["page.jpeg", "page2.png"];

  state = {
    columns: [
      <Column id="left-column" data={<InfoPerson src={this.infoPerson.src} name={this.infoPerson.name} bookNum={this.infoPerson.bookNum} bookR={this.infoPerson.bookR} />} />,
      <Column id="right-column" data={this.renderingBooks()} />
    ], books: this.dataBooks

  }

  componentDidMount() {
    setTimeout(
      () => { this.changeState() }, 10000
    );
  }

  changeState() {
    let books = this.renderingBooks();
    let dataBooks = [
      { name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "logo192.png", alt: "algo", criticism: "", summary: "" },
      { name: 'Libro 2', isbn: 2, author: 'autor2', date: 'date2', img: "logo192.png", alt: "algo" },
      { name: 'Libro 3', isbn: 3, author: 'autor3', date: 'date3', img: "logo192.png", alt: "algo" },
      { name: 'Libro 4', isbn: 4, author: 'autor4', date: 'date4', img: "logo192.png", alt: "algo" },
      { name: 'Libro 5', isbn: 5, author: 'autor5', date: 'date5', img: "logo192.png", alt: "algo" },
    ];
    this.columns = [<Column id="tools-column" data={<ReaderTools />} data2={books} />,
    <Column id="reader" data={<Page id="page" src={this.pagesTemp[0]} />} />,
    <Column id="" data={<InfoBook name={dataBooks[0].name} author={dataBooks[0].author} criticism={dataBooks[0].criticism} summary={dataBooks[0].summary} />} />];

    this.setState(
      {
        columns: this.columns,
      }
    );
  }
  render() {
    return (
      this.state.columns
    );
  }




  renderingBooks() {
    return (
      this.dataBooks.map(
        book => <Book img={book.img} name={book.name} isbn={book.isbn} author={book.author} date={book.author} alt={book.alt} />
      )
    );
  }

}

export default App;

