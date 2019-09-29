import React, { Component } from 'react';
import './App.css';
import NavigationBar from './Page-Components/Header/NavigationBar';
import Banner from './Page-Components/Banner/Banner';
import Carousel from './Page-Components/Carousel/Carousel';
import { recomendBooks, tempQuestions, finaldataBooks, setTempUser } from './Data';
import Reader from './Components/Reader/Reader';
import { urlBooks } from './Data';
import { pdfjs } from 'react-pdf';
import { BrowserRouter, Route } from 'react-router-dom';
import Book from './Classes/Book';
import Question from './Components/Book/Question';
import User from './Classes/User';
import LoginForm from './Components/Login/LoginForm';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class App extends Component {

  constructor(props) {

    super(props);
    //{ name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "logo192.png", alt: "algo", criticism: "", summary: "" },
    // constructor(name, author, isbn, date, img, questions = []) {
    //let books = finaldataBooks.map(bookInfo => (new Book(bookInfo.name, bookInfo.author, bookInfo.isbn, bookInfo.date, bookInfo.img, tempQuestions)));
    // constructor(id, username, name, mail, pass, img, books = []) {
    // let user = new User("0001", "juanvalag", "Juan", "juandva2016@gmail.com", "Juan2016", "1.jpg", books);
    //setTempUser(user);
    /*this.allbooks = dataBooks.map(book => (
      new Book(book.name, book.author, book.isbn, book.date, book.img)
    ));
    console.log(this.allbooks);*/
    //console.log(user);
    this.state = {};
  }


  render() {

    return (
      <div id="page-wrapper" >
        <BrowserRouter>
          <NavigationBar />
          <Route path="/lector" exact render={() => (
            <>
              <Reader document={urlBooks[0]} />
              <Question />
            </>
          )} />
          <Route path="/" exact render={() => (
            <>
              <Banner />
              <Carousel booksInfo={recomendBooks} />
            </>
          )} />
          <Route path="/session" render={() => (
            <LoginForm />
          )} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

