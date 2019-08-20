import React, {Component} from "react";
import {UncontrolledCarousel, Media} from 'reactstrap';
import Description from "./../../Description/Description"
import {ANUNCIOS} from "./../../../Shared/Anuncios/anuncios";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anuncio: ANUNCIOS
        }
    }
    render() {
       return(
           <Description anuncio={this.state.anuncio}></Description>
       );
    }

    
}

export default Main;