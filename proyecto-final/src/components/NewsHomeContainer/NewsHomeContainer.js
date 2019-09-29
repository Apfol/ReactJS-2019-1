import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import NewsCard from '../NewsCard/NewsCard';
import classes from './NewsHomeContainer.css';
import axios from '../axiosInstance.js';
import { Link } from 'react-router-dom';

export default class NewsHomeContainer extends Component {
    state = {
        News: []
    }

    componentDidMount() {
        axios.get('/news')
            .then(response => {
                var updatedNews = response.data;
                updatedNews = updatedNews.map(aNew => {
                    return {
                        img: aNew.img,
                        title: aNew.title,
                        info: aNew.info,
                    }
                });
                this.setState({
                    News: updatedNews,
                });
            })
    }

    render() {
        return(
            <div className="col-md-6">
                <Card className={classes.conNews}>
                    <Link to={"/news"}>
                        <Card.Header style={{ backgroundColor: '#48567F' }}>
                            <div className="row">
                                <div className="col-md-5">
                                    <h1 className={classes.title}>Noticias</h1>
                                </div>
                                <div className="col-md-7">
                                    <p className={classes.newsDesc}>Encuentra las más recientes noticias sobre el municipio
                                y mantente al tanto de los eventos, novedades y demás. </p>
                                </div>
                            </div>
                        </Card.Header>
                    </Link>
                    <Card.Body>
                        <div className="container">
                            <ul class={`nav nav-pills nav-stacked ${classes.scroll}`}>
                                {this.state.News.map( New =>
                                    <NewsCard
                                        img = {New.img}
                                        title = {New.title}
                                        info = {New.info}
                                    />
                                )}
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}