import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import classes from "./NewsVerticalCard.css";
import { Link } from 'react-router-dom';

class NewsVerticalCard extends Component {

    render = () => {
        return (
            <Link to={`/news/${this.props.id}`}>
                <div className={classes.container}>
                    <div>
                        <Image className={classes.image} src={this.props.img} fluid />
                    </div>
                    <div>
                        <p className={classes.title} onClick={this.onClick}>{this.props.title}</p>
                        <p className={classes.info}>{this.props.info}</p>
                    </div>
                </div>
            </Link>
        );
    };

    onClick = () => {
        this.props.handleClick(this.props.id);
    }

}

export default NewsVerticalCard;