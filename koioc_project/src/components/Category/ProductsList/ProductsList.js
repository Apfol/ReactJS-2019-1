import React from 'react';
import Product from './Product/Product';
import './ProductsList.css'

const Products_list = (props) =>{
    return(
        <ul className="products_list">
          {props.productsList.map((product,index) => <Product key={index} product={product}/> )}
        </ul>
    )
}


export default Products_list;