import React from 'react';
import './wrong.css';
import wrongpng from './wrong.png'

const wrong = () => {
    return (
        <div>
            <img src={wrongpng} alt="wrong" className="wrong"/>
        </div>
    );
}

export default wrong;