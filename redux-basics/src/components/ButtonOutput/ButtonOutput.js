import React from 'react' ;
import './ButtonOutput.css';

const buttonOutput = (props) => (
    <div className="ButtonOutput" onClick={props.clicked}>
        {props.label}
    </div>
);

export default(buttonOutput);