import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import classes from './CategoriesList.css';


const CategoriesList = (props) =>{
  
    return(
        <ul className={classes.categories_list}>
          {props.categoriesList.map((category,index) => <CategoryItem key={index} category={category}/> )}
        </ul>
    )
  
}


export default CategoriesList;