import React from "react";
import Navbar from "./../Navbar/Navbar";
import classes from "./Header.css";

var Header = () => {
  return (
    <div>
      <div className={classes.title}>
        <h1>This is PseudoSocial!</h1>
        <p>By: Juan David Murillo</p>
      </div>
      <Navbar></Navbar>
    </div>
  );
};



export default Header;
