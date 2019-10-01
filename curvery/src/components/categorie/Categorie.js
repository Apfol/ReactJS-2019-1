import React, {Component} from 'react';
import Categories from './Categories';
import categories from './Categorie.css'
class Categorie extends Component{
    render(){
        return(
            <div className={categories.body}>
            <h1 className={categories.title}>Categorias</h1>
            <Categories></Categories>
            </div>
        )
    }
}
export default Categorie;