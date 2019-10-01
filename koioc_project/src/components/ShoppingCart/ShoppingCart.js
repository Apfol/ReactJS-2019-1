import React from 'react';
import classes from './ShoppingCart.css';
import InTheCar from './InTheCar/InTheCar.js';
import info from './../../assets/info.js';
import {Link} from 'react-router-dom';

const ShopingCart = (props) =>{

    if(!props.valid){
        alert("Usuario o contraseña invalido");
        props.history.push('/');
        return(null);
    }
    else{
        var deleteFromCar = (service) => {
            props.deleteFromCar(service);
        }

        var totalPrice = () => {
            var price = 0;
            props.logged.employees.map(s =>
                price = price + info.categories[s.categoryID].productsList[s.productIndex].employees[s.serviceID].price
            );
            return price;
        }

        var show = () => {
            alert("AQUI VA UNA PANTALLA DE PAGO");
        }

        return(
            <div>
                <div className={classes.service}>
                    <h4>Shopping cart: {props.logged.employees.length}</h4>
                </div>
                {props.logged.employees.map((s,index) => <InTheCar key={index} deleteFromCar={deleteFromCar} service={s}/>)}
                <div className={classes.price}>
                    <h5>Total price: ${totalPrice()} USD</h5>
                    <button className={classes.button} onClick={show}>Buy</button>
                </div>
            </div>
        )
    }
}


export default ShopingCart;