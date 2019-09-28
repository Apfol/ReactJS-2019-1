import React from 'react';
import Image from 'react-bootstrap/Image';
import classes from "./News.css";

class News extends React.Component {
    render = () => {
        return (
            <li class={`nav-item ${classes.noticia}`}>
                <div className={`row ${classes.notices}`}>
                    <div className={`col-md-6 ${classes.cols}`}>
                        <Image className={classes.noticeImg} src={this.props.notice} fluid />
                    </div>
                    <div className={`col-md-6 ${classes.cols}`}>
                        <a href="#nothing"><h5>{this.props.p}</h5></a>
                        <h9>{this.props.info}</h9>
                    </div>
                </div>
            </li>
        );
    };
}

export default News;