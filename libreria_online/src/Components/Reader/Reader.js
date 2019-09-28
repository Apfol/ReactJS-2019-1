import React, { Component } from 'react';
import { dataBooks } from '../../Data';
import { Document, Page } from 'react-pdf';
import ReaderTools from './ReaderTools';
import InfoBook from './InfoBook';


class Reader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            document: props.document,
            docComponent: {},
            numPages: 0,
            pageNumber: 1
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
            <div id="reader">
                <Document file={"/pdf_files/" + this.state.document + ".pdf"} onLoadSuccess={this.onDocumentLoadSuccess}  >
                    <Page pageNumber={this.state.pageNumber} />
                </Document>
                <ReaderTools nextPage={this.goToNextPage} prevPage={this.goToPrevPage}
                    numPage={this.state.pageNumber} pages={this.state.numPages} />
                <InfoBook name={dataBooks[0].name} author={dataBooks[0].author} criticism={dataBooks[0].criticism} summary={dataBooks[0].summary} />
            </div>

        );
    }
}

export default Reader;