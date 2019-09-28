import React, { Component } from 'react';
import './App.css';
import NavigationBar from './Page-Components/Header/NavigationBar';
import Reader from './Components/Reader/Reader';
import { urlBooks } from './Data';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
/*import Book from './Book';
import Column from './Components/Columns/Column';
import InfoPerson from './Components/Person/InfoPerson';
import ReaderTools from './Components/Reader/ReaderTools';
import Page from './Components/Reader/Page';
import InfoBook from './Components/Reader/InfoBook';
import { infoPerson, dataBooks, finaldataBooks } from './Data';*/

class App extends Component {


  state = {}

  render() {
    return (
      <div id="page-wrapper" >
        <NavigationBar />
        
        <Reader document={urlBooks[0]} />
      </div>
    );
  }
}

export default App;

