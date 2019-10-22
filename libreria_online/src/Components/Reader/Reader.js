import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import ReaderTools from './ReaderTools';
import InfoBook from './InfoBook';
import classes from './Reader.css';
import Question from '../Book/Question';


class Reader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            document: props.document,
            docComponent: {},
            numPages: 0,
            pageNumber: 1,
            book: props.book

        }

    }



    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToNextPage = () => {
        let newPage = this.state.pageNumber + 1;
        if (newPage <= this.state.numPages) {
            this.setState({
                pageNumber: newPage
            });
        }

    }

    goToPrevPage = () => {
        let newPage = this.state.pageNumber - 1;
        if (newPage > 0) {
            this.setState({
                pageNumber: newPage
            });
        }

    }
    render() {
        return (
            <div id="reader" className={classes.wrapper}>
                <section className={classes.reader}>
                    <InfoBook name={this.state.book.name} author={this.state.book.author} date={this.state.book.date} isbn={this.state.book.isbn} />
                    <Document file={"/pdf_files/" + this.state.document + ".pdf"} onLoadSuccess={this.onDocumentLoadSuccess}  >
                        <div className={classes.page}>
                            <Page pageNumber={this.state.pageNumber} />
                        </div>
                    </Document>
                    <ReaderTools nextPage={this.goToNextPage} prevPage={this.goToPrevPage}
                        numPage={this.state.pageNumber} pages={this.state.numPages} />
                </section>
                <section>
                    {this.state.book.questions.map((q, index) => <Question key={index} title={q.title} option1={q.option1} option2={q.option2} option3={q.option3} option4={q.option4} />)}
                    <button onClick={this.sendAnswers}>Enviar Respuestas</button>
                </section>
            </div>

        );
    }

    sendAnswers = () => { }
}

export default Reader;