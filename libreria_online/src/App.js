import React, { Component } from 'react';
import './App.css';
import NavigationBar from './Page-Components/NavigationBar/NavigationBar';
import Banner from './Page-Components/Banner/Banner';
import Carousel from './Page-Components/Carousel/Carousel';
import { recomendBooks, tempQuestions, finaldataBooks, users, setEntered, setTempUser, setUsers } from './Data';
import { pdfjs } from 'react-pdf';
import { BrowserRouter, Route } from 'react-router-dom';
import BookClass from './Classes/Book';
import User from './Classes/User';
import LoginForm from './Components/Login/LoginForm';
import HomeUser from './Components/HomeUser/HomeUser';
import UserBar from './Page-Components/NavigationBar/UserBar';
import UploadPdf from './Components/UploadPdf/UploadPdf';
import Reader from './Components/Reader/Reader';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class App extends Component {

  constructor(props) {

    super(props);
    this.addUsers();
    this.addUser();
    console.log(users);
    this.state = {
      userView: <LoginForm login={this.login} />,
      userNav: "",
      userUpload: "",
      tempReader: "",
      pdfName: ""
    };
  }

  addUsers = () => {
    fetch("https://my-json-server.typicode.com/juanvalag/data/users")
      .then(response => {
        return (response.json());
      })
      .then(data => {
        setUsers(data.map((persondata) => {
          console.log(persondata);
          return (new User(persondata.username, persondata.name, persondata.mail, persondata.pass, persondata.img));
        }));
      });
  }

  addUser = () => {
    let books = finaldataBooks.map(bookInfo => (
      new BookClass(bookInfo.name, bookInfo.author, bookInfo.isbn, bookInfo.date, bookInfo.img, tempQuestions, bookInfo.pdfName)
    ));
    let user = new User("juanvalag", "Juan", "juandva2016@gmail.com", "1234", "person.png", books);
    users.push(user);
    console.log(user);
  }

  login = () => {
    this.setState({
      userNav: <UserBar logout={this.logout} />,
      userView: <HomeUser openReader={this.openReader} />,
      userUpload: <UploadPdf />
    });
  }

  openReader = (book) => {
    this.setState({
      pdfName: book.pdfName,
      tempReader: <Reader document={book.pdfName} book={book} />
    });
  }

  logout = () => {
    setEntered(false);
    setTempUser({});
    this.setState({
      userView: <LoginForm login={this.login} />,
      userNav: "",
      userUpload: "",
      tempReader: "",
      pdfName: ""
    });
  }


  render() {

    return (
      <BrowserRouter>
        <NavigationBar userNav={this.state.userNav} />
        <Route path="/" exact render={() => (
          <>
            <Banner />
            <Carousel booksInfo={recomendBooks} title="Libros Recomendados" />
          </>
        )} />
        <Route path="/session/" render={() => this.state.userView} />
        <Route path="/session/upload" render={() => this.state.userUpload} />
        <Route path={"/books/" + this.state.pdfName} exact render={() => this.state.tempReader} />
      </BrowserRouter>

    );
  }
}

export default App;

