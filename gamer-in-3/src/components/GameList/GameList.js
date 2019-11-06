import React, { Component } from "react";
import GameCard from "../GameCard/GameCard"
import "./GameList.css"

export default class GameList extends Component {
    render() {

        var cards = this.props.games.map((game, index) => {
            return (
                <React.Fragment key={index}>
                    <GameCard image={game.image} title={game.title} text={game.text} index={game.id} />
                </React.Fragment>
            );
        });

        return (
            <div>
                {cards}
            </div>
        );
    }
}
