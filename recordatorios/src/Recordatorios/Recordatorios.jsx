import React from "react";
import Buttons from "./../Buttons/Buttons";

var Recordatorios = props => {
  return (
    <div>
      <p>{props.reminder.content}</p>
      <Buttons deleteReminder={props.deleteReminder}></Buttons>
    </div>
  );
};

export default Recordatorios;
