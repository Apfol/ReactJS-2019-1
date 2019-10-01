import React, {Component} from 'react';
import Recommendeds from './Recommendeds';
import recommended from './Recommended.css';

class Recommended extends Component{
    render(){
        return(
            <div className={recommended.body}>
            <h1 className={recommended.title}>Cursos Recomendados</h1>
            <Recommendeds></Recommendeds>
            </div>
        )
    }
}
export default Recommended;