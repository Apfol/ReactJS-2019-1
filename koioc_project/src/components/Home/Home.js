import React, {Component } from 'react';
import Carousel from './Carousel/Carousel';
import classes from './Home.css';
import CategoriesList from './CategoriesList/CategoriesList';
import CommentsList from './CommentsList/CommentsList';
import { connect } from 'react-redux';
import {notify} from 'react-notify-toast';
import * as actionCreators from '../../store/actions';

class Home extends Component {

	componentWillMount () {
        if (!this.props.isUserLoggedIn) {
            this.props.history.push('/');
        }
	}
	
	render () {
		if(this.props.info.categories !== undefined){
			return (
				<div className={classes.home_container}>
					<Carousel />
					<CategoriesList categoriesList={this.props.info.categories}/>
					<div className={classes.card_columns}>
						<CommentsList commentsList ={this.props.info.comments} />
					</div>
				</div>
			);
		}else{
			return null;
		}
	}

	componentDidUpdate(){
		if (!this.props.welcomeToast) {
			let myColor = { background: '#fffcfc', text: "#00000" };
			notify.show("Welcome " + this.props.userLoggedIn.userName + "!" , "custom", 5000, myColor);
			this.props.onShowWelcomeToast();
		}
	}
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
		error: state.authenticationStore.error,
		welcomeToast: state.authenticationStore.welcomeToast,
		userLoggedIn: state.authenticationStore.userLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onShowWelcomeToast: () => dispatch(actionCreators.showWelcomeToast(true)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);


