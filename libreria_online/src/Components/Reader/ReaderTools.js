import React, { Component } from 'react';

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
            <div id="reader_tools">
                Zomm: <button> + </button>
                <button> - </button>
                <p>pagina {this.props.numPage} de {this.props.pages}</p>
                <button onClick={this.prevPage}>anterior</button>
                <button onClick={this.nextPage}>siguiente</button>
            </div>
        );
    }
}

export default ReaderTools;