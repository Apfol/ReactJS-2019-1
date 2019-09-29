import React, { Component } from 'react';
import axios from '../axiosInstance';
import NewsVerticalCard from '../NewsVerticalCard/NewsVerticalCard.js';
import classes from './News.css';

class News extends Component {
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
                        fullInfo: aNew.fullInfo,
                    }
                });
                this.setState({
                    News: updatedNews,
                });
            })
    }

    render() {
        return(
            <div>
                <p className = {classes.title}>Noticias al Dia</p>
                <div className = {classes.container}>
                    {this.state.News.map( aNew =>
                        <NewsVerticalCard
                            img = {aNew.img}
                            title = {aNew.title}
                            info = {aNew.info}
                            fullInfo = {aNew.fullInfo}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default News;