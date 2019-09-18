import React, { Component } from 'react';
import Book from './Components/Book/Book';
import Column from './Components/Columns/Column';
import './App.css';
import InfoPerson from './Components/Person/InfoPerson';
import ReaderTools from './Components/Reader/ReaderTools';
import Page from './Components/Reader/Page';
import InfoBook from './Components/Reader/InfoBook';
import { infoPerson, dataBooks, finaldataBooks } from './Data';

class App extends Component {


  pagesTemp = ["page.jpeg", "page2.png"];

  state = {
    columns: [
      <Column id="left-column" data={<InfoPerson src={infoPerson.src} name={infoPerson.name} bookNum={infoPerson.bookNum} bookR={infoPerson.bookR} />} />,
      <Column id="right-column" data={this.renderingBooks()} />
    ], books: dataBooks
  }

  componentDidMount() {
    setTimeout(
      () => { this.changeState() }, 10000
    );
  }

  changeState() {
    let dataBooks = finaldataBooks;
    this.columns = [<Column id="tools-column" data={<ReaderTools />} />,
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
      dataBooks.map(
        book => <Book img={book.img} name={book.name} isbn={book.isbn} author={book.author} date={book.author} alt={book.alt} />
      )
    );
  }

}

export default App;

