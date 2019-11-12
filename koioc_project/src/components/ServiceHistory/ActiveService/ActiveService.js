import React from 'react';
import classes from './ActiveService.css';
import axios from 'axios';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

class ActiveServices extends React.Component {

    state = {
        categories : {},
        employees : [],
        rating: 0
    }

    componentDidMount () {
        if(this.props.service!==null){
            axios.get('https://koioc-23ec2.firebaseio.com/categories/'+this.props.service.idCategory+'.json')
            .then(response  => {
                if (response.data.productsList !== null) {
                    this.setState({
                        categories: response.data
                    })
                }
            });
        }
        axios.get('https://koioc-23ec2.firebaseio.com/users/'+this.props.userLoggedIn.uid+'.json')
        .then(response  => {
            var employees = response.data.employees
            this.setState({
                employees : employees
            })
        });
    }

    changeRating = ( newRating )  =>{
        this.setState({
          rating: newRating
        });
    }
    
    render(){
        var serviceComplete = () => {
            this.props.serviceComplete(this.props.service.idCategory,this.props.service.idProduct,this.props.service.idEmployee, this.state.rating)
        }

        if(this.state.categories.productsList!==undefined){
            if(this.props.service.active !== false && this.props.service.paid === true){
                return(
                    <div className={classes.service}>
                        <div className={classes.serviceDetails}>
                            <img className={classes.photo} 
                                src={this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].picture} alt="delete"></img>
                            <div className={classes.names}>
                                <p> <strong>Category: </strong>{this.state.categories.name}</p>
                                <p> <strong>Product: </strong>{this.state.categories.productsList[this.props.service.idProduct].tittle}</p>
                                <p> <strong>Who will take the service: </strong>{this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].name}</p>
                                <p> <strong>Person's speciality: </strong>{this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].description}</p>
                            </div>
                            <div className={classes.starRate}>
                                <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="blue"
                                    changeRating={this.changeRating}
                                    numberOfStars={5}
                                    starDimension = '25px'
                                    name='rating'
                                    starEmptyColor = "black"
                                    starHoverColor = "blue" 
                                    starSpacing = '2px'
                                />
                            </div>
                        </div>
                        <div className={classes.servicePrice}>
                            <h4 className={classes.paid}>Paid: ${this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].price} USD</h4>
                        </div>
                        <button className={classes.serviceComplete} onClick={serviceComplete}>Confirm service complete</button>
                    </div>
                )
            }
            else{
                return null
            }
        }else{
            return null
        }
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        error: state.authenticationStore.error,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        shoppingCart: state.shoppingCartStore.shoppingCart
    }
}

export default connect(mapStateToProps)(ActiveServices);