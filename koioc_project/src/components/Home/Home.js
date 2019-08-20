import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import './Home.css';
import CategoriesList from './CategoriesList/CategoriesList';
import CommentsList from './CommentsList/CommentsList';


class Home extends Component {
	
	render () {
		return (

			<div className="home_container">
				<Carousel />
                <CategoriesList categoriesList={this.props.info.categories}/>
				<div className="card-columns">
					<CommentsList commentsList ={this.props.info.comments} />
				</div>

			</div>
		);
	}
}

export default Home;


