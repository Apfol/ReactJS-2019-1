import React, {Component} from 'react';
import Classes from './infoImage.css';

class InfoImage extends Component{
    render(){
        return(
            <div className = {Classes.container}>
                <div className = {Classes.leftContainer}>
                    <p className = {Classes.title}>'{this.props.title}'</p>
                    <p className = {Classes.author}>{this.props.author}</p>
                </div>
                <img className = {Classes.image} src = {this.props.url}></img>
            </div>
        )
    }
}

export default InfoImage;