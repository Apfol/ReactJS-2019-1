import React, {Component } from 'react';
import Carousel from './Carousel/Carousel';
import classes from './Home.css';
import CategoriesList from './CategoriesList/CategoriesList';
import CommentsList from './CommentsList/CommentsList';
import {withRouter} from 'react-router-dom';


class Home extends Component {

	componentWillMount(){
		if (!this.props.valid) {
			this.props.history.push('/');
		}
	}
	
	render () {
		if(this.props.valid === true){
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
		else{
			return (
				<div>
					<h1 style={{textAlign: "center"}}>Ese usuario no existe</h1>
					<p style={{textAlign: "center"}}>Ir a iniciar sesion</p>
				</div>
			);
		}
	}
}

export default withRouter(Home);


