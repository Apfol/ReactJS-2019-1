import React from 'react';
import {Link} from 'react-router-dom';
import classes from '../CategoriesList.css';

const CategoryItem = (props) =>{
    return(
        <Link to={`/categories/${props.category.id}`} className={classes.category_link}>
            <div className={` text-white text-center ${ props.category.class }`}>
                    <div className={classes.card_body}>
                        <h3 className={classes.card_title}>{props.category.name}</h3>
                        <p className={classes.card_text}>{props.category.description}</p>
                    </div>
            </div>
        </Link>
    )
}


export default CategoryItem;