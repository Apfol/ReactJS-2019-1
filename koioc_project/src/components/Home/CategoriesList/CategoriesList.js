import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import './CategoriesList.css';


const CategoriesList = (props) =>{
  
    return(
        <ul className="categories_list">
          {props.categoriesList.map((category,index) => <CategoryItem key={index} category={category}/> )}
        </ul>
    )
  
}


export default CategoriesList;