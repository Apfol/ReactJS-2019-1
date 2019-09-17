import React from "react";
import Buttons from "./../Buttons/Buttons";
import classes from './../Recordatorios/Recordatorios.css';

var Recordatorios = props => {
  return (
    <div className={classes.container} onClick={props.showIndex}>
      <p className={classes.text}>{props.reminder.content}</p>
      <Buttons key={props.reminderIndex} className={classes.button}
       deleteReminder={props.deleteReminder}
       updateReminder={props.updateReminder}></Buttons>
    </div>
  );
};

export default Recordatorios;
