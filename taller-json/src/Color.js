import React from 'react';




var Color = (props) => {


    return(
        <div style={{background: props.colorValue}}>
            <h1> {props.colorName} </h1>  
            <p> {props.colorValue} </p>
        </div>
    );
}

export default Color;