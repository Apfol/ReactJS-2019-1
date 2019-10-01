import React from 'react';
import ProductList from './ProductsList/ProductsList';
import classes from './Category.css'

class Category extends React.Component{
    
    constructor(props){
        super(props)

        this.idCategory = this.props.match.params.idCategory
    }

    componentWillMount(){
		if(!this.props.valid){
			alert("Usuario o contraseña invalido");
			this.props.history.push('/');
		}
    }
    
    render(){
        return(
            <div className={classes.category_container}>
                <h2 className={classes.category_tittle}>{this.props.categoriesList[this.idCategory].name}</h2>
                <h4>{this.props.categoriesList[this.idCategory].description}</h4>
                <ProductList idCategory={this.idCategory} productsList={this.props.categoriesList[this.idCategory].productsList} logged={this.props.logged} updateCar={this.props.updateCar} />
            </div>
        )
    }
}

export default Category;