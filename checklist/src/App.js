import React from 'react';

import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import classes from  './App.css';

function App() {
  return (
      <div className={classes.PageName}>
          <Header/>
          <Main/>
          <Footer/>
      </div>
  );
}

export default App;
