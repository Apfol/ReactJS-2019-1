import React, { Component } from 'react';
import "./Home.css"
import List from "./List/List"
class Home extends Component {
	render() {
		let games = [
			{
				image: "https://i.blogs.es/19ba21/league-of-legends/450_1000.jpg",
				title: "League of legends",
				text: "League of legends lorem ipsum"
			},
			{
				image: "https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1561594389",
				title: "DOTA 2",
				text: "Dota 2 lorem ipsum"
			},
			{
				image: "https://cdn2.unrealengine.com/Fortnite%2Fbattle-royale%2F09BP_Web_GetFornitePage_3UPMain-1920x1000-f8c6eabdf58b43b779e5762693908748572e6cb0.jpg",
				title: "Fornite",
				text: "Fornite lorem ipsum"
			},
			{
				image: "https://f.rpp-noticias.io/2019/01/24/204920_743066.jpg",
				title: "PUBG",
				text: "PUBG lorem ipsum"
			},
			{
				image: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg",
				title: "APEX legends",
				text: "Apex legends lorem ipsum"
			}
		]
		return (
			<div className='home'>
				<div className="game-list">
					<List games={games} />
				</div>
			</div>
		);
	}
}

export default Home;