import React, { Component } from "react";
import Reminder from "./../Reminder/Reminder";
import Reminders from "./../../Reminders.json";
import classes from "./Button.css";
import { newExpression } from "@babel/types";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numRecordatorios: 0,
      recordatorios: []
    };
  }

  render() {
    return (
      <div>
        <button
          className={classes.button1}
          onClick={() => this.crearRecordatorio()}
        >
          Crear recordatorio
        </button>
        <button className={classes.button2}>Editar recordatorios</button>
      </div>
    );
  }

  crearRecordatorio() {
    var index = Reminders.list.length;
    var contenido = prompt("Ingresa tu recordatorio:");

    var newReminder = {
      id: index - 1,
      content: contenido,
      active: true
    };

    var fullJSON = JSON.parse(Reminders);
    fullJSON["list"].push(newReminder);
    Reminders = JSON.stringify(fullJSON);
  }
}

export default Button;
