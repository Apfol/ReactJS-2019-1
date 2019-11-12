import React from 'react';
import classes from './InTheCar.css';
import logo from '../../../assets/images/basura.png';
import axios from 'axios';
import { connect } from 'react-redux';
//last

class InTheCar extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        categories: {},
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
    }

    render(){
        var deleteFromCar = () => {
            this.props.delete(this.props.service);
        }

        if(this.state.categories.productsList!==undefined){
            if(this.props.service.active !== false && this.props.service.paid !== true){
                return(
                    <div className={classes.service}>
                            <button className={classes.delete} onClick={deleteFromCar}>    
                                <img className={classes.delete} src={logo} alt="delete"></img>
                            </button>
                        <img className={classes.photo} src={this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].picture} alt="delete"></img>
                        <div className={classes.names}>
                            <p>Category: {this.state.categories.name}</p>
                            <p>Product: {this.state.categories.productsList[this.props.service.idProduct].tittle}</p>
                            <p>Who will take the service: {this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].name}</p>
                            <p>Person's speciality: {this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].description}</p>
                            <h4>Price: ${this.state.categories.productsList[this.props.service.idProduct].employees[this.props.service.idEmployee].price} USD</h4>
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

export default connect(mapStateToProps)(InTheCar);