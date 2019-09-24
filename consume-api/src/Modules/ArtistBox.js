import React, { Component } from 'react';

import './ArtistBox.css';

export default class ArtistBox extends Component {   

  render() {
    const { url,image, name, comments,listeners } = this.props.artist        
    return (
      <div className="ArtistBox">
        <div className="ArtistImage">
          <img className="Image" src={image} />
        </div>        
        <div className="ArtistDetail">
          <h2>{name}</h2>          
          <h3>Comentarios:  {comments}</h3>            
          <h3>Seguidores:  {listeners}</h3> 
          <a target="_blank" href={url}>Redirigir</a>           
        </div>            
      </div>
    );
  }
}
