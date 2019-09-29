import React from 'react';
import Image from 'react-bootstrap/Image';
import classes from "./NewsCard.css";

class NewsCard extends React.Component {
    render = () => {
        return (
            <li class={classes.noticia}>
                <div className={`row ${classes.notices}`}>
                    <div className={`col-md-6 ${classes.cols}`}>
                        <Image className={classes.noticeImg} src={this.props.img} fluid />
                    </div>
                    <div className={`col-md-6 ${classes.cols}`}>
                        <a><h5>{this.props.title}</h5></a>
                        <h9>{this.props.info}</h9>
                    </div>
                </div>
            </li>
        );
    };
}

export default NewsCard;