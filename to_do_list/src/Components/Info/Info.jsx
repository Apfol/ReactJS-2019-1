import React, { Component } from "react";
import classes from "./Info.css";

class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.container}>
        <li className={classes.li} key={this.props.key}>
          {this.props.contenido}
          <div className={classes.buttons}>
            <button onClick={() => this.delete(this.props.index)}>X</button>
            <button onClick={() => this.edit(this.props.index)}>Editar</button>
          </div>
        </li>
      </div>
    );
  }

  delete(key){
     console.log('Eliminando elemento: ' + key);
  }

  edit(key){
    console.log('Editando elemento: ' + key);
  }
}

export default Info;
