import React, { Component } from 'react'
import GameList from '../../components/GameList/GameList';
import classes from './HomePage.css';
import axios from '../../instances/axios-posts';

class HomePage extends Component {
    state = {
        games: []
    }
    componentDidMount() {
        axios.get("/games.json")
            .then(response => {
                const games = Object.values(response.data).map((game) => {
                    return { ...game };
                });
                console.log(games);
                this.setState({
                    games: games
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className={classes.margin}>
                    <div className={classes.back}></div>
                    <div className={classes.info}>
                        <h1 className={classes.infoTitle}>Gamer In</h1>
                        <h2 className={classes.infoSubTitle}>Stuff again</h2>
                    </div>
                </div>
                <div className={classes.wrapper}>
                    Home page
                    <GameList games={this.state.games} />
                </div>
            </div>
        )
    }
}
export default HomePage;
