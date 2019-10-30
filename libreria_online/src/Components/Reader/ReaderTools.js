import React, { Component } from 'react';
import classes from './ReaderTools.css';


class ReaderTools extends Component {

    state = {
        numPage: this.props.numPage,
        numPages: this.props.pages
    }


    nextPage = () => {
        this.props.nextPage();
    }

    prevPage = () => {
        this.props.prevPage();
    }
    render() {
        return (
            <div className={classes.readerTools}>
                <p>pagina {this.props.numPage} de {this.props.pages}</p>
                <button onClick={this.prevPage}>anterior</button>
                <button onClick={this.nextPage}>siguiente</button>
            </div>
        );
    }
}

export default ReaderTools;