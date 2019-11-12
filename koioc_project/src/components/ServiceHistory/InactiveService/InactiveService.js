import React from 'react';
import classes from './InactiveService.css';
import axios from 'axios';
import { connect } from 'react-redux';
import StarRatings from 'react-star-ratings';

class InactiveServices extends React.Component {

    state = {
        info: {
            picture: '',
            category: '',
            product: '',
            whoTK: '',
            speciality: '',
            price: ''
        },
        employees : []
    }

    componentDidMount () {
        if(this.props.service!==null){
            axios.get('https://koioc-23ec2.firebaseio.com/categories/'+this.props.service.idCategory+'.json')
            .then(response  => {
                if (response.data.productsList !== null) {
                    this.setState({
                        info: {
                            picture: response.data.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].picture,
                            category: response.data.name,
                            product: response.data.productsList[this.props.service.idProduct].tittle,
                            whoTK: response.data.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].name,
                            speciality: response.data.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].description,
                            price: response.data.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].price
                        }
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

    render(){
        if(this.state.info!==undefined){
            if(this.props.service.active === false && this.props.service.paid === true){
                return(
                    
                    <div className={classes.service}>
                        <div className={classes.serviceDetails}>
                            <img className={classes.photo} src={this.state.info.picture} alt="delete"></img>
                            <div className={classes.names}>
                                <p><strong>Category: </strong>{this.state.info.category}</p>
                                <p><strong>Product: </strong>{this.state.info.product}</p>
                                <p><strong>Who took the service: </strong>{this.state.info.whoTK}</p>
                                <p><strong>Person's speciality: </strong>{this.state.info.speciality}</p>
                            </div>
                            <div className={classes.starRate}>
                                <StarRatings
                                    rating={this.props.service.stars}
                                    starRatedColor="#d8d800ab"
                                    numberOfStars={5}
                                    starDimension = '25px'
                                    name='rating'
                                    starEmptyColor = "black"
                                    starSpacing = '2px'
                                />
                            </div>
                        </div>
                        <div className={classes.servicePrice}>
                        <h4>Paid: ${this.state.info.price} USD</h4>
                        </div>
                        
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
export default connect(mapStateToProps)(InactiveServices);