import React, { Component } from 'react';
import ArtistBox from "./Modules/ArtistBox"

import './ArtistList.css';

export default class ArtistList extends Component {   
  render() {        
    return (
      <div className="ArtistList">
         props.artists.map((artist) => return <ArtistBox artist = {artist} /> )        
      </div>
    );
  }
}
