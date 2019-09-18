import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    state = {
        title: this.props.title,
        image: this.props.image,
        text: this.props.text
    };

    setInitialValues = () => {
        let title = "Bienvenido a la nueva experiencia de lectura",
         image= "";
        if (this.state.title) {
            title = this.state.title;
        } 

        this.setState({
            title: title
        });

    };

    render() {

        <div className="banner">
            <h1>{this.state.title}</h1>
            <p>{this.state.text}</p>
            <img alt="" src={this.state.image} />
        </div>
    }
}

export default Banner;