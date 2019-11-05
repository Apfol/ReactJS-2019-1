import React from 'react';
import './Error.css';

export default function Error(props) {
    return (
        <div className="error-msg">
            <i className="fa fa-times-circle margin-icon"></i>
            {props.message}
        </div>
    )
}
