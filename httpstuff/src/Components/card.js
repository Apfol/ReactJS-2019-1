import React from 'react';
import classes from './card.css';

var Card= (props)=>{
       
        return(
            <div className={classes.albumcontainer} >
                <div className={classes.albumimage} data-background={props.card.img}>

                </div>
               <h2>Album: {props.card.album}</h2> 
                <h3>Artist: {props.card.artist}</h3>
                <h4>Genre: {props.card.genre}</h4>
            </div>
            );
    
}
export default Card;