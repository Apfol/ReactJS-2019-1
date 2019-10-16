import React from 'react';

import './Element.css';

const Element = (props) => (
    <div className='Element'>
        <p>{props.value}</p>
    </div>
);

export default Element;