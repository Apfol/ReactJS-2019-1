import React, {Component} from 'react';
import './App.css';
import ArtistBox from "./Modules/ArtistBox"



export default class App extends Component {
  state = {    
    artistList: [],
    artistSelected:"Juanes"
  }

  componentDidMount () {

    
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
                      listeners: artist.listeners,
                      url: artist.url,
                      comments: Math.floor( Math.random() * (3000000 - 100000) + 100000)
                  }
              })
              this.setState({
                  artistList: artistNew
              })
            })
    }
  

  render() { 

  return (
    <div className="App"> 
      <h1>Los mejores albumes de: </h1> 
      {console.log(this.state.artistList)}
      {this.state.artistList.map((item,index) =>  <ArtistBox key={index} artist =  {item} /> )}        
                    
    </div>
  );
  }
}

