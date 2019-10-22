import React from 'react';
import Element from './Element';

const listOutput = (props) => (
    <div>
        {props.list.map((element, index)=> <Element key ={index} value={element}></Element>)}
    </div>
);

export default listOutput;