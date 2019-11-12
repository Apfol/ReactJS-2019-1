import React, { Component } from 'react';
import classes from './ServiceHistory.css';
import ActiveService from './ActiveService/ActiveService.js';
import InactiveService from './InactiveService/InactiveService.js';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

class ServiceHistory extends Component {

    constructor(props){
        super(props);
        this.state = {
            services : this.props.shoppingCart        
        }
        
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            services: nextProps.shoppingCart
        })
    }

    componentDidUpdate () {
        if (!this.props.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }
    
    render(){
        return(
            <div className={classes.all}>
                <div className={classes.service}>
                    <h3>Active services: </h3>
                </div>
                {this.renderActiveServices()}
                <div className={classes.service}>
                    <h3>Inactive services: </h3>
                </div>
                {this.renderInActiveServices()}
                
            </div>
        )
    }

    renderInActiveServices = () =>{
        var countServices = 0;
        this.state.services.map((service)=>{
            if(service.active === false && service.paid === true){
                countServices++
            }
        })
        if (countServices > 0) {
            return (this.state.services.map((s,index) => <InactiveService key={index} index ={index} service={s}/>))
        }else{
            return <h4 className={classes.noServices}>You don't have inactive services yet!</h4>
        }

    }

    renderActiveServices = () =>{
        var countServices = 0;
        this.state.services.map((service)=>{
            if(service.active !== false && service.paid === true){
                countServices++
            }
        })
        if (countServices > 0) {
            return (this.state.services.map((s,index) => <ActiveService key={index} index ={index} serviceComplete={this.serviceComplete} service={s}/>))
        }else{
            return <h4 className={classes.noServices}>You don't have active services yet!</h4>
        }

    }

    serviceComplete = (idCategory,idProduct,idEmployee, stars) => {
        for(var i=0;i<this.state.services.length; i++){
            if(this.state.services[i].idCategory===Number(idCategory)){
                if(this.state.services[i].idProduct===idProduct){
                    if(this.state.services[i].idEmployee===idEmployee){
                        var changedService = [...this.state.services]
                        changedService[i].active = false
                        changedService[i].stars = stars
                        this.setState({
                            services : changedService
                        })
                        this.props.onSaveProduct(changedService, this.props.userLoggedIn.uid);
                    }
                }
            }
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
        onSaveProduct: (products, uid) => dispatch(actionCreators.saveProduct(products, uid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ServiceHistory);