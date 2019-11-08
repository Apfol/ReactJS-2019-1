import React, { Component } from 'react'
import classes from './GameInfo.css'
import { connect } from 'react-redux';
import Loader from '../../components/Spinner/Spinner';

class GameInfo extends Component {
    onFull = (game) => {

        return (
            <div>
                <div className={classes.margin}>
                    <div className={classes.back} style={{ backgroundImage: `url(${game.image})` }}>
                        <div className={classes.layer}></div>
                    </div>
                    <div className={classes.info}>
                        <h1 className={classes.infoTitle}>{game ? game.title : ""}</h1>
                    </div>
                </div >
                <div className={classes["text-align-center"]}>
                    <p className={classes.description}>{game.description}</p>
                </div>
            </div>
        );
    }
    charge = () => {
        return <Loader />
    }
    render() {
        const game = this.props.games.find(game => game.id + "" === this.props.match.params.gameIndex);
        return (
            <div>
                {game ? this.onFull(game) : this.charge()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        games: state.gamesStore.games
    }
}

export default connect(mapStateToProps)(GameInfo);
