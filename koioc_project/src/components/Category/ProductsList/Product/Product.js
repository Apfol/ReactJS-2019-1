import React from 'react';
import classes from './Product.css';
import { Modal, Button } from 'react-bootstrap';
import Services from './Services/Services.js';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../../../../store/actions';

class Product extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            show: false,    
            employees : [],
            newEmployees: []
        };           
    }

    componentWillMount () {
        axios.get('https://koioc-23ec2.firebaseio.com/users/'+this.props.userLoggedIn.uid+'.json')
        .then(response  => {
            var employees = response.data.employees
            this.setState({
                employees : employees
            })
        });
    }

    render(){
        return(
        <li className={classes.product} >
            <div onClick={this.handleShow}>
                <img src={this.props.product.image} alt="category-pic"></img>
                <p>{this.props.product.tittle}</p>
            </div>
            <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className="modal_tittle tittle" >{this.props.product.tittle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section className={classes.modal_details}>
                        <img src={this.props.product.image} alt={`product${this.props.product.tittle}`}></img>
                        {this.props.product.employees.map((service,index) => <Services key={index} index={index} service={service} paint={this.paintChecked} selected={this.isChecked}/> )}
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button title="Close the modal" variant="danger" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Link to = "/shoppingCart">
                        <Button title="Order a service" variant="primary" onClick={this.updateCar}>
                            Order Service
                        </Button>
                    </Link>
                        
                    
                </Modal.Footer>
            </Modal>
        </li>
        )
    }

    handleClose = () =>{
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    paintChecked = (index) => {
        if(this.state.employees !== undefined){
            for(var i=0;i<this.state.employees.length; i++){
                if(this.state.employees[i] !== null){
                    if(this.state.employees[i].idCategory===Number(this.props.idCategory)){
                        if(this.state.employees[i].idProduct===this.props.index){
                            if(this.state.employees[i].idEmployee===index){
                                if(this.state.employees[i].paid !== true){
                                    return this.state.employees[i].active;
                                }
                            }
                        }
                    }
                }
           }
        }
    }

    isChecked = (index) => {
        var existe = false;
        if(this.state.employees !== undefined){
            for(var i=0;i<this.state.employees.length; i++){
                if(this.state.employees[i] !== null){
                    if(this.state.employees[i].idEmployee===index){
                        if(this.state.employees[i].idProduct===this.props.index){
                            if(this.state.employees[i].idCategory===Number(this.props.idCategory)){
                                if(this.state.employees[i].active === true && this.state.employees[i].paid === false){
                                    existe = true;
                                    var categoryEmployees = this.state.employees
                                    categoryEmployees[i].active = false
                                    this.setState( {employees : categoryEmployees });
                                }
                            }
                        }
                    }
                }
            }
        }
        
        if(existe === false) {
            var products = [{
                idCategory : Number(this.props.idCategory),
                idProduct : this.props.index,
                idEmployee : index,
                active : true,
                paid : false
            }]
            if(this.state.employees!==undefined){
                var totalProducts = products.concat(this.state.employees)
                this.setState({
                    employees : totalProducts,
                })
            }else{
                this.setState({
                    employees : products,
                })
            }
        }
    
    }

    updateCar = () => {
        if(this.state.employees !== undefined){
            var products = this.state.employees;
            this.props.onSaveProduct(products, this.props.userLoggedIn.uid);
        }
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        error: state.authenticationStore.error,
        userLoggedIn: state.authenticationStore.userLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveProduct: (products, uid) => dispatch(actionCreators.saveProduct(products, uid))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
