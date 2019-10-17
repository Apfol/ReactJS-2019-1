import React from 'react' ;

const listOutput = (props) => (
    <div className="listOutput">
        {props.value.map(item => {
            return(
                <li>{item}</li>
            )
        })}
    </div>
);

export default(listOutput);