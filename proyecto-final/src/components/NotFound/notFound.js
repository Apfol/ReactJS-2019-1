import classes from './notFound.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js';

export default class notFound extends Component {
    render(){
        return(
            <div>
                <NavigationBar/>
                {/* <h1>ERROR 404. PAGINA NO ENCONTRADA</h1> */}
                <Footer/>
            </div>
            
        );
    }
}
