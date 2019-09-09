import React from 'react';
import classes from './Activity.css';

function Activity(props) {
   var change = () => {
     props.change(props.id)     
   }

   var deleteF = () => {
    props.remove(props.id)     
  }
   var clase = (props.done) ?  "item_done" : "item";
   var item = (props.done) ?  "Activity_done" : "Activity";

    return (
      <li className={classes[item]}>        
          <h6 key={props.id} className={classes[clase]}>{props.id}</h6>
          <h6 className={classes[clase]}>{props.activity}</h6> 
          <div className={classes.buttons}>
            <button className={classes.btnDone} onClick={change.bind(this)}>
              Hecho
            </button>
            <button className={classes.btnDelete} onClick={deleteF.bind(this)}>
              Eliminar
            </button>
          </div>           
      </li>
    );
  }
  
  export default Activity;