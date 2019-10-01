import React from 'react';
import classes from './Product.css';
import { Modal, Button } from 'react-bootstrap';
import Services from './Services/Services.js';
import {Link} from 'react-router-dom';

class Product extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            show: false,
            selectedEmployees: this.props.logged.employees
        };           
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
                        <Button title="Order a service" variant="primary" onClick={this.updateCar()}>
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
        for(var i=0;i<this.state.selectedEmployees.length; i++){
            if(this.state.selectedEmployees[i].categoryID===this.props.idCategory){
                if(this.state.selectedEmployees[i].productIndex===this.props.index){
                    if(this.state.selectedEmployees[i].serviceID===index){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    isChecked = (index) => {
        var count=0;
        for(var i=0;i<this.state.selectedEmployees.length; i++){
            if(this.state.selectedEmployees[i].serviceID!==index){
                count++;
            }
            else{
                if(this.state.selectedEmployees[i].productIndex!==this.props.index){
                    count++;
                }
                else{
                    if(this.state.selectedEmployees[i].categoryID!==this.props.idCategory){
                        count++;
                    }
                }
            }
        }
        console.log(this.state.selectedEmployees.length+"  "+count);
        
        if(count===this.state.selectedEmployees.length){
            var s = {
                categoryID : this.props.idCategory,
                productIndex : this.props.index,
                serviceID : index
            };
            const help = this.state.selectedEmployees.concat(s)
            this.setState({ selectedEmployees: help });
        }
        if(count!==this.state.selectedEmployees.length){
            var help = this.state.selectedEmployees.filter(n =>  (n.categoryID !== this.props.idCategory)||((n.categoryID === this.props.idCategory) && (n.serviceID !== index || n.productIndex!==this.props.index)));
            
            this.setState({ selectedEmployees: help });
        }
    }

    updateCar = () => {
        var help = this.props.logged;
        help.employees = this.state.selectedEmployees;
        this.props.updateCar(help);
    }
}

export default Product;
