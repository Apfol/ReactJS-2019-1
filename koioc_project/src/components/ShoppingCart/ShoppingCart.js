import React, { Component } from 'react';
import classes from './ShoppingCart.css';
import InTheCar from './InTheCar/InTheCar.js';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../../store/actions';
import StripeChekout from 'react-stripe-checkout';
import firebase from '../../config/firebase_config';

class ShopingCart extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories : [],
            employees : this.props.shoppingCart
        }
        
    }

    componentDidMount(){
        axios.get('https://koioc-23ec2.firebaseio.com/categories.json')
        .then(response  => {
          this.setState({
              categories: response.data,
          }) 
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            employees : nextProps.shoppingCart
        })
    }

    componentDidUpdate () {
        if (!this.props.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    totalPrice = () => {
        var price = 0;
        if(this.state.employees !== undefined){
            this.state.employees.map(s => {
                if(s !== null && this.state.categories.length > 0){
                    if(s.active !== false && s.paid !== true ){
                        if(this.state.categories[s.idCategory] !== undefined){
                            price = price + this.state.categories[s.idCategory].productsList[s.idProduct].employees[s.idEmployee].price
                        }
                    }
                }
            });
        }
        return price;
    }

    shoppingCartLenght = () => {
        var lenght = 0;
        if(this.state.employees!==undefined){
            for(var i = 0 ; i < this.state.employees.length ; i++){
                if(this.state.employees[i].active !== false && this.state.employees[i].paid !==true){
                    lenght++;
                }
            }
        }
        return lenght;
    }

    paintServices = () => {
        if(this.state.employees!==undefined){
            return this.state.employees.map((s,index) => <InTheCar key={index} index ={index} delete={this.deleteS} service={s}/>)
        }
        return <div></div>;
    }

    deleteS = (service) => {
        var newEmployees = this.state.employees.filter(s => s !== service)
        this.props.onSaveProduct(newEmployees, this.props.userLoggedIn.uid);
        this.setState({
            employees : newEmployees
        })
    }

    handleToken = (token) => {
        var otherServices = this.props.shoppingCart.filter(s => s.paid === true)
        var info = {
            paymentID : token.id,
            price : this.totalPrice(),
            card : {
                address_city : token.card.address_city,
                address_country : token.card.address_country,
                address_line : token.card.address_line1,
                address_zip : token.card.address_zip,
                brand : token.card.brand,
                country : token.card.country,
                exp_month : token.card.exp_month,
                exp_year : token.card.exp_year,
                funding : token.card.funding,
                id : token.card.id,
                last4 : token.card.last4,
                name : token.card.name,
            },
        }
        var description = this.props.shoppingCart.filter(s => s.active === true && s.paid === false)
        description.map(s => s.paid = true)
        var payment = {
            info : info,
            description : description
        }
        var i = firebase.database().ref("/users/"+this.props.userLoggedIn.uid+"/payments/"+token.created)
        i.set(payment)
        .then(response => {})
        .catch(error => {
            console.log(error);
        });
        var concat = otherServices.concat(description)
        this.setState({
            employees : concat
        })
        this.props.onSaveProduct(this.state.employees, this.props.userLoggedIn.uid,() => {
            this.props.history.push('/serviceHistory');
        });
    }
    
    render(){
        if(this.state.categories.length > 0){
            return(
                <div>
                    <div className={classes.shoppingCartLenght}>
                        <h4>Shopping Cart ({this.shoppingCartLenght()})</h4>
                    </div>
                    <div className={classes.table}>
                        <div className={classes.service}>
                            {this.paintServices()}
                        </div>
                        <div className={classes.price}>
                            <h4>Order Summary</h4>
                            <h5>Total: </h5> <h3>${this.totalPrice()} USD</h3>
                            <StripeChekout style={{backgroundImage: "none",background:"#4A00E0"}} className={classes.button} 
                                stripeKey="pk_test_Aow1jFUa3lYqe71ZD4barqOW00mAsbbnpN" token={this.handleToken} 
                                amount={this.totalPrice()*100} name={"Order of "+this.props.userLoggedIn.userName}
                                allowRememberMe={false} billingAddress={true}></StripeChekout>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
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

const mapDispatchToProps = dispatch => {
    return {
        onSaveProduct: (products, uid, onSuccessCallback) => dispatch(
            actionCreators.saveProduct(products, uid, onSuccessCallback))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopingCart);