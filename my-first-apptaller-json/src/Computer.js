import React from 'react';
import './App.css';




var Computer = (props) => {


    return(
        <div className="contenedor">
            <div className="titulodiv">
                <h1> {props.computerName} </h1> 
            </div> 
            <div className="especsdiv">
                <p className="ficha"> {props.computerSpecs} </p>
            </div>
            <img src={props.computerImage} style={{width:'240px', height:'200px'}}/>
        </div>
    );
}

export default Computer; 