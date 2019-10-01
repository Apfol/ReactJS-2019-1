import React, { Component } from 'react';
import CardList from "../CardList/CardList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "../../AxiosInstance";
import classes from "./Home.css";
import FullGame from "../FullGame/FullGame";

export default class Home extends Component {
    state = {
        games: [],
        loading: false,
        error: false
    }
    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get("/games")
            .then(response => {
                console.log(response.data);
                this.setState({
                    games: response.data
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                });
            })
            .then(() => {
                this.setState({
                    loading: false
                });
            });
    }
    openGame = (gameIndex) => {
        return this.state.games.filter(game => game.id === gameIndex)[0];
    }

    render() {
        var content;
        if (this.state.loading) {
            content = <h1>Loading...</h1>
        } else if (this.state.error) {
            content = <h1>Error loading data, please try again</h1>
        } else {
            content = (
                <React.Fragment>
                    <div className={classes["game-list"]}>
                        <h1 className={classes.title}>Pc Games</h1>
                        <CardList games={this.state.games.filter(game => game.platform === "PC")} />
                    </div>
                    <div className={classes["game-list"]}>
                        <h1 className={classes.title}>Console Games</h1>
                        <CardList games={this.state.games.filter(game => game.platform === "Console")} />
                    </div>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Route path="/game/:gameIndex" exact render={() => {
                    return (<FullGame openGame={(gameIndex) => this.openGame(gameIndex)} />)
                }} />
                <div className={classes.home}>
                    {content}
                </div >
            </React.Fragment>
        );
    }
}
