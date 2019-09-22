import React from 'react';
import './Comic.css';

const Comic = (props) =>{
    //console.log(props.comicData["images"][0].path)
    var image = {...props.comicData.images[0]}
    console.log(image)
    return(
        <li className="comic">
            <h2>{props.comicData.title}</h2>
            <img src={image.path+"."+image.extension}></img>
            <p className="comicDescription">{props.comicData.description+"..."}</p>
        </li>
    )
}

export default Comic;