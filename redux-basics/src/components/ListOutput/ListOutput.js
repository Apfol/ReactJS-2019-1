import React from 'react'

export default function ListOutput(props) {
    return (
        <div>
            {props.value.map(item => {
                return(
                    <li>{item}</li>
                )
            })}
        </div>
    )
}