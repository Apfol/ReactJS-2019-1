import React, { Component } from 'react';
import axios from '../../instances/axiosInstance';
import NewsVerticalCard from '../../components/NewsVerticalCard/NewsVerticalCard.js';
import NewsDetailed from '../../components/NewsDetailed/NewsDetailed.js';
import classes from './News.css';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../../components/Footer/Footer.js';

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
            <div>
                <NavigationBar/>
                <Route path="/news" exact>{this.getNews()}</Route>
                <Route path="/news/:placeId" render={() => (
                    <NewsDetailed
                        news = {this.state.newsSelected}
                    />
                )} />
                <Footer/>
            </div>
        )
    }
}
