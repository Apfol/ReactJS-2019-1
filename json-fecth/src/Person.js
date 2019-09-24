import React, { Component } from 'react';
import './Person.css';


class Person extends Component {

    state = {
        id: this.props.id,
        name: this.props.name,
        last_name: this.props.last_name,
        phone: this.props.phone
    }


    render() {
        return (
            <div id="person">
                <h1>{this.state.name + " " + this.state.last_name}</h1>
                <p>{this.state.phone}</p>
            </div>
        );
    }
}

export default Person;