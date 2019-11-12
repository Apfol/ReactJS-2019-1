import React from 'react';
import Product from './Product/Product';
import classes from './ProductsList.css'

const Products_list = (props) =>{
    return(
        <ul className={classes.products_list}>
          {props.productsList.map((product,index) => <Product key={index} index = {index} product={product} idCategory={props.idCategory}/>)}
        </ul>
    )
}


export default Products_list;