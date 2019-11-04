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
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/loginActionGenerator';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      userView: <LoginForm login={this.login} />,
      userNav: "",
      userUpload: "",
      tempReader: "",
      pdfName: ""
    };
  }

  componentDidMount() {
    this.props.onPersistAuthentication();
  }




  openReader = (book) => {
    this.setState({
      pdfName: book.pdfName,
      tempReader: <Reader document={book.pdfName} book={book} />
    });
  }
  

  render() {
    let userNav = "", userView = (<LoginForm login={this.login} />), userUpload = "";
    if (this.props.isUserLogOn) {
      userNav = (<UserBar logout={this.logout} />);
      userView = (<HomeUser openReader={this.openReader} />);
      userUpload = (<UploadPdf />);
    }
    return (
      <BrowserRouter>
        <NavigationBar userNav={userNav} />
        <Route path="/" exact render={() => (
          <>
            <Banner />
            <Carousel booksInfo={recomendBooks} title="Libros Recomendados" />
          </>
        )} />
        <Route path="/session/" render={() => userView} />
        <Route path="/session/upload" render={() => userUpload} />
        <Route path={"/books/" + this.state.pdfName} exact render={() => this.state.tempReader} />
      </BrowserRouter>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPersistAuthentication: () => dispatch(actionCreator.persistAuthenticaction())
  }
}

const mapStateToProps = (state) => {
  return {
    isUserLogOn: state.sessionStore.logged
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

