import React, { Component } from 'react';
import classes from './Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        let title = "Bienvenido a la nueva experiencia de lectura",
            image = "img/initial-banner.jpg",
            text = `Con ReeaadMe puedes compartir documentos y
    mejorar tus habillidades de lectura con las preguntas 
    incorporadas por otros usuarios`;
        if (props.title) {
            title = this.props.title;
        }
        if (props.image) {
            image = this.props.image;
        }
        if (props.text) {
            text = this.props.text;
        }

        this.state = {
            title: title,
            image: image,
            text: text
        };

    }

    render() {
        return (
            <div className={classes.banner} >
                <div className={classes.right_text}>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.text}</p>
                </div>
            </div>
        );
    }
}

export default Banner;