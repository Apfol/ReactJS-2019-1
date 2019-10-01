import React, {Component} from 'react';
import classes from "./Home.css";
import InformationTown from '../InformationTown/InformationTown.js';
import PictureSlider from '../PictureSlider/PictureSlider';
import NewsHomeContainer from '../NewsHomeContainer/NewsHomeContainer.js';

export default class Home extends Component {
    render() {
        return (
            <div>
                <PictureSlider></PictureSlider>
                <div className={`${classes.cuerpo} row`}>
                    <NewsHomeContainer></NewsHomeContainer>
                    <InformationTown></InformationTown>
                </div>
            </div>
        );
    }
}