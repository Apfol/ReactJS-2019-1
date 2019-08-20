import React from 'react';

const Person = (props) => {
    return(
    <div>
        <h1>Hello my name is {props.name}</h1>
        <p>And my age is {props.age}</p>
    </div>
    )
}

export default Person;