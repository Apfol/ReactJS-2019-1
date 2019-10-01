import React from 'react';
import classes from './Services.css';
 

class Services extends React.Component{
isChecked = () => {
        this.props.selected(this.props.index);
    }

    paint = () => {
        return this.props.paint(this.props.index);
    }

    render(){
        return(
            <section className={classes.service}>
                <label className={classes.container}>
                    <input onChange={this.isChecked} checked={this.paint()} type="checkbox"/>
                    <span className={classes.checkmark}></span>
                </label>
                <h5>{this.props.service.name}: </h5>
                <h5>{this.props.service.description}</h5>
            </section>
        )
    }
}

export default Services;