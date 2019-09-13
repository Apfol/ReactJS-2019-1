import React, { Component } from "react";
import Reminders from "./../../Reminders.json";
import Info from "./../Info/Info";
import classes from "./Reminder.css";

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: Object.keys(Reminders.list),
      recordatorios: [
        {
          content: "This is an item",
          active: true
        },
        {
          content: "This is another item",
          active: true
        }
      ],
      newPostInfo:{
        content: "",
        active: ""
      }
    };
  }
  crearRecordatorio() {
    var updatedPosts = [...this.state.recordatorios];
    var newPostInfo = {...this.state.newPostInfo};

    newPostInfo 

    // var contenido = prompt("Ingresa tu recordatorio:");

    // if(contenido.length !== 0){
    //   this.setState({ sumatoria: this.state.sumatoria + 1 });

    //   var temporal = {
    //     id: this.state.sumatoria,
    //     content: contenido,
    //     status: true
    //   };
  
    //   this.setState({
    //     recordatorios: this.state.recordatorios.concat(temporal)
    //   });
    // } else{
    //   alert('Recordatorio inválido');
    // };
   

    
  }

  renderContenido() {
    return(
      this.state.recordatorios.map((item, index) => {
        console.log(item.content);
        return <Info key={index} contenido={item.content} status={item.active} index={index}></Info>;
      })
    );    
  }

  resetArray(){
    this.setState({
      recordatorios: []
    });
  }

  render() {
    return (
      <div>
        <div className={classes.button}>
          <button
            className={classes.button1}
            onClick={() => this.crearRecordatorio()}
          >
            Crear recordatorio
          </button>
          {/* <button className={classes.button2}>Editar recordatorios</button> */}
        </div>
        <div className={classes.main}>
          <ul>{this.renderContenido()}</ul>
        </div>
        <div className={classes.button}>
        <button className={classes.button} onClick={() => this.resetArray()}>Eliminar recordatorios</button>
        </div>
      </div>
    );
  }
}

export default Reminder;
