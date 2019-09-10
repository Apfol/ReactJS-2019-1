import React, { Component } from "react";
import Button from "./../Button/Button";
import Reminder from "../Reminder/Reminder";
import classes from "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numReminders: 0
    };
  }

  render() {
    return (
      <div className={classes.page}>
        <header className={classes.header}>To Do List</header>
        <div className={classes.main}>
          <div className={classes.button}>
            {/* <Button></Button> */}
          </div>
          <Reminder></Reminder>
        </div>
      </div>
    );
  }
}

export default Home;
