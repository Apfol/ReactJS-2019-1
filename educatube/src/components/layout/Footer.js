import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div class="foot">
            <h5>Derechos de autor © 2019 EducaTube, Inc.</h5>
            <div class="hrf">
              <a data-purpose="terms-link" href="" >condiciones </a>
              <a data-purpose="terms-link" href="" >   Politica de privacidad </a>
              <a data-purpose="terms-link" href="" >   Cookies </a>
            </div>
        </div>
        )
    }
}

export default Footer;
