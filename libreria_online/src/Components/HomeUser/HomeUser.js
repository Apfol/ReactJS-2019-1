import React, { Component } from 'react';
import Book from '../Book/Book';
import InfoPerson from '../Person/InfoPerson';
import { Route } from 'react-router-dom';
import { tempUser } from '../../Data';
import classes from "./HomeUser.css";


class HomeUser extends Component {



    state = {
        pdfName: "",
        tempBook: {},
        routers: ""
    }

    render() {
        return (
            <>
                <Route path="/session/sign-in" exact render={() => (
                    <div className={classes.books_person} id="">
                        <InfoPerson src={tempUser.img} name={tempUser.name} bookNum={tempUser.books.length} bookR="" />
                        <div>
                            <h1>Libros subidos</h1>
                            <hr />
                            <div>
                                {tempUser.books.map((book, index) =>
                                    <Book key={index} img={book.img} name={book.name} date={book.date} author={book.author} isbn={book.isbn} openReader={this.openReader} pdfName={book.pdfName} />)}
                            </div>
                        </div>
                    </div>)} />
                {(this.state.routers)}
            </>
        );
    }
    openReader = (pdfName) => {
        let tempBook = tempUser.books.filter(book => book.pdfName === pdfName);

        this.props.openReader(tempBook[0]);
    }
}

export default HomeUser;