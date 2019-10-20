import React from 'react';

import './ListControl.css';

const listControl = (props) => (
    <div>
        <button className="ListControl" onClick={props.clicked}>
            {props.label}
        </button>
    </div>
);

export default listControl;