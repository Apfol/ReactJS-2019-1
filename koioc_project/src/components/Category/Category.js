import React from 'react';
import Products_list from './ProductsList/ProductsList';
import './Category.css'

class Category extends React.Component{
    
    constructor(props){
        super(props)

        this.idCategory = this.props.match.params.idCategory
    }

    render(){
        return(
            <div className="category_container">
                <h2 className="category_tittle">{this.props.categoriesList[this.idCategory].name}</h2>
                <h4>{this.props.categoriesList[this.idCategory].description}</h4>
                <Products_list productsList={this.props.categoriesList[this.idCategory].productsList} />
            </div>
        )
    }
}

export default Category;