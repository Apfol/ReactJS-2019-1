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
    const token = "BQDnaBYb27szqOQ0KWDa-CkMXhy3akNFCQMQwtPOtCHJI5LYH-C4Z0XwbadPFrq0exms6SkSrIZJLTKZf2MhAOGxVPwbMmttZYUWLmhYQKN_va9omkTjvV2QOORaHD8XMwW97Dv--WnTOya26Je_bJUEOx3cSpOSrs97xK-jusHgC5SvcxiWB_CVjShoWLB5kWc3cbEYaGi2A75bTXEXIrD4hCjXpHyt9x6GIfHebpl7JYwRQClrtbyygopQ2vyvkA2pos1bIOP1yQ";
    
    for(var i=0; i < this.data.ids.length;i++){
      this.executeAxios(this.data.ids[i].id,token)
    }
  }

  executeAxios(id,token){
    axios.get('https://api.spotify.com/v1/tracks/'+
      id+
      '?access_token='+token)
      .then(response => {
        console.log(response);
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
