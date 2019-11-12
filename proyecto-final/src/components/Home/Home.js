import React, {Component} from 'react';
import classes from "./Home.css";
import InformationTown from '../InformationTown/InformationTown.js';
import PictureSlider from '../PictureSlider/PictureSlider';
import NewsHomeContainer from '../NewsHomeContainer/NewsHomeContainer.js';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar/>
                <PictureSlider/>
                <div className={`${classes.cuerpo} row`}>
                    <NewsHomeContainer/>
                    <InformationTown/>
                </div>
                <Footer/>
            </div>
        );
    }
}