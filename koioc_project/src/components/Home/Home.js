import React, {Component } from 'react';
import Carousel from './Carousel/Carousel';
import classes from './Home.css';
import CategoriesList from './CategoriesList/CategoriesList';
import CommentsList from './CommentsList/CommentsList';
import {withRouter} from 'react-router-dom';


class Home extends Component {

	componentWillMount(){
		if(!this.props.valid){
			alert("Usuario o contraseña invalido");
			this.props.history.push('/');
		}
	}
	
	render () {
		return (
			<div className={classes.home_container}>
				<Carousel />
				<CategoriesList categoriesList={this.props.info.categories}/>
				<div className={classes.card_columns}>
					<CommentsList commentsList ={this.props.info.comments} />
				</div>

			</div>
		);
	}
}

export default withRouter(Home);


