import React from 'react';
import classes from './Product.css';
import { Modal, Button } from 'react-bootstrap';
 

class Product extends React.Component{


    constructor(props) {
        super(props);

        this.state = {
            show: false
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
                        <img src={this.props.product.image} alt={`product${this.props.product.tittle}`} ></img>
                        <section>
                            <h3>Details:</h3>
                        </section>
                    </section>
                </Modal.Body>
                <Modal.Footer>
                    <Button title="Close the modal" variant="danger" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button title="Order a service" variant="primary" onClick={this.handleClose}>
                        Order Service
                    </Button>
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
}

export default Product;
