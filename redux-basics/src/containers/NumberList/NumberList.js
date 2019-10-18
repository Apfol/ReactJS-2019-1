import React, { Component } from 'react';

import './NumberList.css';

const NumberList = (props) => (
    <div className="NumberList" >
        <h2>Numeros guardados</h2>
        {props.numeros.map(item => <ul className = "Item">{item}</ul>)}
    </div>
);

export default NumberList;