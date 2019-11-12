import React from 'react';
import ProductList from './ProductsList/ProductsList';
import classes from './Category.css'
import { connect } from 'react-redux';

class Category extends React.Component{
    
    constructor(props){
        super(props)

        this.idCategory = this.props.match.params.idCategory
    }

    componentDidMount () {
        if (!this.props.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    onSuccessCallBack(){
        this.props.history.push('/shoppingCart');
    }
    
    render(){
        if(this.props.categoriesList !== undefined){
            return(
                <div className={classes.category_container}>
                    <h2 className={classes.category_tittle}>{this.props.categoriesList[this.idCategory].name}</h2>
                    <h4>{this.props.categoriesList[this.idCategory].description}</h4>
                    <ProductList idCategory={this.idCategory} productsList={this.props.categoriesList[this.idCategory].productsList}/>
                </div>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        error: state.authenticationStore.error
    }
}

export default connect(mapStateToProps)(Category);