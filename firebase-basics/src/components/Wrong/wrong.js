import React from 'react';
import './wrong.css';
import wrongpng from './wrong.png'

const wrong = () => {
    return (
        <div className="wrong">
            <img src={wrongpng} alt="wrong"/>
        </div>
    );
}

export default wrong;