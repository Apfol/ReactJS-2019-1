import React, {Component} from 'react';
import Classes from './title.css'

class Title extends Component{
    render(){
        return(
            <div>
                <h1 className = {Classes.mainTitle}>Muestra de Imagenes</h1>
            </div>
        )
    }
}

export default Title;