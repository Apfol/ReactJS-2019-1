import React, { Component } from 'react';
import classes from "./Home.css"
import List from "./List/List"
import axios from '../../AxiosInstance';
class Home extends Component {
	state = {
		games: [],
		loading: false
	}
	componentDidMount() {
		this.setState({
			loading: true
		});
		axios.get("/games")
			.then(response => {
				this.setState({
					games: response.data
				});
			})
	}
	openPost = (postIndex) => {
		return this.state.posts[postIndex];
	}
	render() {
		return (
			<div className={classes.home}>
				<div className={classes["game-list"]}>
					<h1 className={classes["pc-title"]}>Games</h1>
					<List games={this.state.games} />
				</div>
			</div >
		);
	}
}

export default Home;