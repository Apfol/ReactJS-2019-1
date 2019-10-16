import React from 'react';

import './ListControl.css';


const ListControl = (props) => (
    <div className="ListControl" onClick={props.clicked}>
        {props.label}
    </div>
)

export default ListControl;
