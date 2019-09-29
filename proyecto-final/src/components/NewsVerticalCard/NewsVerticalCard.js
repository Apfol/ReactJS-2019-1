import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import classes from "./NewsVerticalCard.css";
import { Link } from 'react-router-dom';

class NewsVerticalCard extends Component {
    render = () => {
        return (
            <Link to={"/post/"+"hola"}>
                <div className={classes.container}>
                    <div>
                        <Image className={classes.image} src={this.props.img} fluid />
                    </div>
                    <div>
                        <p className = {classes.title}>{this.props.title}</p> 
                        <p className = {classes.info}>{this.props.info}</p>
                        <p className = {classes.fullInfo}>{this.props.fullInfo}</p>
                    </div>
                </div>
            </Link>
        );
    };
}

export default NewsVerticalCard;