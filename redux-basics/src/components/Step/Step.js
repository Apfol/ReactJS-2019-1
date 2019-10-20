import React from 'react';
import "./Step.css";

function Step(props) {
    return (
        <div className="step">
            <p>{props.value}</p>
        </div>
    );
}

export default Step;