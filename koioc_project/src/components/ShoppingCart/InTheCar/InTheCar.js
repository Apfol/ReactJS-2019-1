import React from 'react';
import classes from './InTheCar.css';
import info from '../../../assets/info.js';
import logo from '../../../assets/images/basura.png';

const InTheCar = (props) =>{

    var deleteFromCar = () => {
        props.deleteFromCar(props.service);
    }

    return(
        <div className={classes.service}>
            <button className={classes.delete} onClick={deleteFromCar}>    
                <img className={classes.delete} src={logo} alt="delete"></img>
            </button>
            <img className={classes.photo} src={info.categories[props.service.categoryID].productsList[props.service.productIndex].employees[props.service.serviceID].picture} alt="delete"></img>
            <div className={classes.names}>
                <p>Category: {info.categories[props.service.categoryID].name}</p>
                <p>Product: {info.categories[props.service.categoryID].productsList[props.service.productIndex].tittle}</p>
                <p>Who will take the service: {info.categories[props.service.categoryID].productsList[props.service.productIndex].employees[props.service.serviceID].name}</p>
                <p>Person's speciality: {info.categories[props.service.categoryID].productsList[props.service.productIndex].employees[props.service.serviceID].description}</p>
                <h4>Price: ${info.categories[props.service.categoryID].productsList[props.service.productIndex].employees[props.service.serviceID].price} USD</h4>
            </div>
        </div>
    )
}


export default InTheCar;