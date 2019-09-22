import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import classes from './App.css';
import Songs from './Songs/Songs.js';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import FullSong from './FullSong/FullSong.js';

class App extends Component{
  
  componentDidMount(){
    const token = "BQDYCnNUNUb40mcJQ9vgCQmCFrxNdpAYd4w1CUN_RyZztkBGKQJXEsNtbPCSe13anzEKMhwi4-mv9KoLk9cag1oSY7rNt1BurV7CRaA0EcGrV5SXNeUIDegp7fi0gOUflp6alP6U48xVcgyEmihmD3K9PyFOh_II-fZB409nZgFJsH9SpLrzjZco3i0U4xRgCa48-CphEOQg6Qwp_kDjht2ACtJqn5AHQX8YGeEwcYHTi10q6-6gtDIkr_zKsaqWTRtDh3kYChOOdA";
    
    for(var i=0; i < this.data.ids.length;i++){
      this.executeAxios(this.data.ids[i].id,token)
    }
  }

  executeAxios(id,token){
    axios.get('https://api.spotify.com/v1/tracks/'+
      id+
      '?access_token='+token)
      .then(response => {
        const updateArtist = [{
            artist: response.data.artists, 
            song: response.data.name, 
            album: response.data.album
        }];
        const help = this.data.artists.concat(updateArtist);
        
        this.setState(this.data.artists = help);
      });
  }

  data = {
    artists: [],
    ids: [
      {id: "25KybV9BOUlvcnv7nN3Pyo"},
      {id: "2Ch7LmS7r2Gy2kc64wv3Bz"},
      {id: "3dWpRjCmaHbroNahuSeX11"},
      {id: "77MsQNnI0Co0UZOkPyuid3"},
      {id: "7KbF6AdprOXEEHlsq11Z6d"},
      {id: "6v0lAdFF4haL8xjBIUjtOw"},
      {id: "1bTGBPtXr3SrQRTlrYcx3w"},
      {id: "7feNblkR0A56vttsAGTyzK"},
      {id: "6hwmqR7uQhytLnJzt1RVPF"},
      {id: "4S6fv0puLCsfYjyBTPDb9k"}
    ],
    loading : false
  }

  render() {
    return (
      <BrowserRouter>
        <div className={classes.container}>
          <h2 className={classes.title}>My favorite songs!</h2>
          <div className={classes.list}>
            <Route path ="/" exact render = {() => <Songs songs = {this.data.artists} />} />
          </div>
        </div>

        <Route path ="/song/:songIndex" exact render = {() => (
          <FullSong openSong = {(songIndex) => this.openSong(songIndex)} />
        )} />
      </BrowserRouter>
    )
  }
  
  openSong = (songIndex) => {
    return this.data.artists[songIndex];
  }
}

export default App;
