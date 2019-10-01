import React, { Component } from 'react';
import classes from './Carousel.css';
import Book from '../../Components/Book/Book';



class Carousel extends Component {
    constructor(props) {
        super(props);
        this.books = this.setBooks();
        this.numBooksToRender = 5;
        if (props.numBooksToRender) {
            this.numBooksToRender = props.numBooksToRender;
        }
        if (props.books) {
            this.books = props.books;
        }
        this.state = {
            index: 0,
            books: this.books,
            booksToRender: this.books.slice(0, this.numBooksToRender)
        };
    }

    nextBooks = () => {
        let index = this.state.index;
        index += this.numBooksToRender;
        if (index < this.state.books.length) {
            let lastPosibleindex = index + this.numBooksToRender;
            /* alert(index);
             alert(this.state.books.length);
             alert(lastPosibleindex);*/
            if (this.books[lastPosibleindex]) {
                this.setState({
                    booksToRender: this.books.slice(index, lastPosibleindex),
                    index: index
                });
            } else {
                this.setState({
                    booksToRender: this.books.slice(index),
                    index: index
                });
            }
        }
    }

    previousBooks = () => {
        let index = this.state.index;
        index -= this.numBooksToRender;
        //alert(index);
        if (index >= 0) {
            this.setState({
                booksToRender: this.books.slice(index, index + this.numBooksToRender),
                index: index
            });
        }

    }

    setBooks() {
        return (
            this.props.booksInfo.map(
                book => <Book img={book.img} name={book.name} isbn={book.isbn} author={book.author} date={book.author} alt={book.alt} />)
        );
    }

    render() {
        return (
            <div >
                <header>
                    <h1>{this.props.title}</h1>
                    <hr />
                </header>
                <div className={classes.carousel}>
                    <div className={classes.left_arrow} onClick={this.previousBooks}>
                        <img alt="" src="img/left-arrow.png" />
                    </div>
                    <div className={classes.container}>
                        {this.state.booksToRender}
                    </div>
                    <div className={classes.right_arrow} onClick={this.nextBooks}>
                        <img alt="" src="img/right-arrow.png" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;