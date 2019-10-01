import React, { Component } from 'react';
import axios from '../axiosInstance';
import NewsVerticalCard from '../NewsVerticalCard/NewsVerticalCard.js';
import NewsDetailed from '../NewsDetailed/NewsDetailed.js';
import classes from './News.css';
import { BrowserRouter, Route } from 'react-router-dom';

export default class News extends Component {

    state = {
        News: [],
        newsSelected : {
            id: "",
            img: "",
            title: "",
            info: "",
            fullInfo: "",
        },
    }

    componentDidMount() {
        axios.get('/news')
            .then(response => {
                var updatedNews = response.data;
                updatedNews = updatedNews.map(aNew => {
                    return {
                        id: aNew.id,
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
            .catch(error => {
            });
    }

    onClickNews(itemPosition) {   
        const news = this.state.News.find(({ id }) => id === itemPosition);
        this.setState({
            newsSelected: news,
        });  
    }

    getNews = () => {
        return(
            <div>
                <p className = {classes.title}>Noticias al Día</p>
                <div className = {classes.container}>
                    {this.state.News.map( aNew =>
                        <NewsVerticalCard
                            img = {aNew.img}
                            title = {aNew.title}
                            info = {aNew.info}
                            id = {aNew.id}
                            handleClick = {this.onClickNews.bind(this)}
                            fullInfo = {aNew.fullInfo}
                        />
                    )}
                </div>
            </div>
        )
    }

    render() {
        return (
            <BrowserRouter>
                <Route path="/news/" exact>{this.getNews()}</Route>
                <Route path="/news/:placeId" render={() => (
                    <NewsDetailed
                        news = {this.state.newsSelected}
                    />
                )} />
            </BrowserRouter>
        )
    }
}
