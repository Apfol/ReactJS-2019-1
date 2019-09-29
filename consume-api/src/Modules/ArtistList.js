import React, { Component } from 'react';
import ArtistBox from "./Modules/ArtistBox"

import './ArtistList.css';

export default class ArtistList extends Component {   
  
  render() {
    console.log(props.artists);        
    return (
      <div className="ArtistList">
         props.artists.map((artist) => return <ArtistBox artist = {artist} /> )        
      </div>
    );
  }
}
