import React from 'react';

import './List.css';

const list = (props) => (
    <div className="List">
        {props.value.map(item => {
            return (
                <li>{item}</li>
            )
        })}
    </div>
);

export default list;





