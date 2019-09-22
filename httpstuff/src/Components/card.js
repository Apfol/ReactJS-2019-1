import React, {Component} from 'react';
import classes from './card.css';

export default class card extends Component{
    render(){
        const{album,artist,img,genre}=this.props;
        return(
            <div>
               <h2>Album: {this.album}</h2> 
                <h3>Artist: {this.artist}</h3>
                <h4>Genre: {this.genre}</h4>
            </div>
            
            );
    }

}