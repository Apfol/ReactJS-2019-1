import React from 'react';
import classes from './Services.css';

const Services = (props)  => {
    var isChecked = () => {
        props.selected(props.index);
    }
    
    var paint = () => {
        return props.paint(props.index);
    }

    return(
        <section className={classes.service}>
            <label className={classes.container}>
                <input onChange={isChecked} checked={paint()} type="checkbox"/>
                <span className={classes.checkmark}></span>
            </label>
            <h5>{props.service.name}: </h5>
            <h5>{props.service.description}</h5>
        </section>
    )
}

export default (Services);