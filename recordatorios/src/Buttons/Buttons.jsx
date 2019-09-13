import React from 'react';

var Buttons = (props) =>{
    return(
        <div>
            <a href="#" onClick={props.deleteReminder}>Eliminar recordatorio</a>
        </div>
    );
}
export default Buttons;