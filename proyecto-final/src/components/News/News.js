import React, { Component } from 'react';
import NewsVerticalCard from '../NewsVerticalCard/NewsVerticalCard.js';
import NewsDetailed from '../NewsDetailed/NewsDetailed.js';
import classes from './News.css';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js';
import { connect } from 'react-redux';
import { Row, Col, Container, Image } from 'react-bootstrap';
import CommentForm from '../CommentForm/CommentForm';

import * as actionCreators from '../../store/actions/news.js';

class News extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        news: this.props.news,
        newsSelected : {
            id: "",
            img: "",
            title: "",
            info: "",
            fullInfo: "",
        },
    }

    componentDidMount() {
        this.props.onFetchNews();
    }

    componentWillUpdate (nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchNews();
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            news: nextState.news,
        });
    }

    onClickNews(itemPosition) {   
        const news = this.state.news.find(({ id }) => id === itemPosition);
        this.setState({
            newsSelected: news,
        });  
    }

    getNews = () => {
        return(
            <div>
                <p className = {classes.title}>Noticias al Día</p>
                <div className = {classes.container}>
                    {this.state.news.map( aNew =>
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
        if(this.state.isUserLoggedIn == false){
            return(
                this.onUserLogOut()
            )
        }
        else{
            return (
                this.onUserLogIn()
            )
        }
        
    }

    onUserLogIn(){
        return(
            <div>
                <Route path="/news" exact>{this.getNews()}</Route>
                <Route path="/news/:placeId" render={() => (
                    <div>
                        <NewsDetailed news = {this.state.newsSelected}/>
                        <Col md={2}>
                            <p style={{ fontSize: "20px", fontWeight: "bolder", textAlign: "center" }}>Discusión</p>
                        </Col>
                        <Col md={5}>
                            <div style={{ borderBottom: "1px solid gray", height: "10px" }}></div>
                        </Col>
                        <Col md={12}>
                            <CommentForm></CommentForm>
                        </Col>
                    </div> 
                )} />
            </div>
        )
    }

    onUserLogOut(){
        return(
            <div>
                <Route path="/news" exact>{this.getNews()}</Route>
                <Route path="/news/:placeId" render={() => (
                    <div>
                        <NewsDetailed news = {this.state.newsSelected}/>
                        <p className = {classes.sesion}>Inicia Sesión para comentar</p>
                    </div> 
                )} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        news: state.newsStore.news,
        loadingNews: state.newsStore.loadingNews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNews: () =>dispatch(actionCreators.fetchNews()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
