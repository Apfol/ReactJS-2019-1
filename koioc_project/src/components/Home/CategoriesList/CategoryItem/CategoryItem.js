import React from 'react';
import {Link} from 'react-router-dom';

const CategoryItem = (props) =>{
    return(
        <Link to={`/categories/${props.category.id}`} className="category_link">
            <div className={` text-white text-center ${ props.category.class }`}>
                    <div className="card-body">
                        <h3 className="card-title">{props.category.name}</h3>
                        <p className="card-text">{props.category.description}</p>
                    </div>
            </div>
        </Link>
    )
}


export default CategoryItem;