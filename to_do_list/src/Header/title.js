import Radium from 'radium';
import React, {Component} from 'react';
import Classes from './title.css';


class Title extends Component {
    render (){
        return(
            <div>
                <h1 className = {Classes.mainTitle}>TO DO LIST</h1>
            </div>
        )
    }
}

export default Radium(Title);