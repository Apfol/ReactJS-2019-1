import React from 'react';
import classes from './../Buttons/Buttons.css';

var Buttons = (props) =>{
    return(
        <div>
            <button onClick={props.updateReminder}>Editar Post</button>
            <br></br>
            <br/>   
            <button className={classes.button} onClick={props.deleteReminder}>Eliminar recordatorio</button>
        </div>
    );
}
export default Buttons;