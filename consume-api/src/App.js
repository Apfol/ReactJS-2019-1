import React, {Component} from 'react';
import './App.css';
import ArtistBox from "./Modules/ArtistBox"
import {gettopartists} from './Modules/ApiClient'



export default class App extends Component {
  state = {    
    artistList: [],
    artistSelected:"Juanes"
  }

  componentDidMount () {

    const apiKey = "c83a1679902d8fa544f8dba9a6e305b2";
    const URL = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=c83a1679902d8fa544f8dba9a6e305b2&format=json";

    fetch(URL)
            .then(response => response.json())
            .then(data => data.topartists.artist)
            .then(artist =>{
              console.log(artist)
              var artistNew = artist.map(artist => {
                  return {
                      albumId: artist.mbid,
                      name: artist.name,
                      image:artist.image[3]["#text"],
                      listeners: artist.listeners
                  }
              })
              this.setState({
                  artistList: artistNew
              })
            })
    }
  

  render() {
  const artist = {
    albumId: "A",
    name: this.state.artistSelected,
    image:"https://pbs.twimg.com/profile_images/1106225279918329867/zyPV96RA_400x400.jpg",
    listeners: "12"
  }  

  return (
    <div className="App"> 
      <h1>Los mejores albumes de: </h1> 
      {console.log(this.state.artistList)}
      {this.state.artistList.map(item =>  <ArtistBox artist =  {item} /> )}        
                    
    </div>
  );
  }
}

