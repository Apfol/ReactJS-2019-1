import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import classes from './App.css';
import Songs from './Songs/Songs.js';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import FullSong from './FullSong/FullSong.js';

class App extends Component{
  constructor (props){ 
    super(props);
    //GET
    const apiKey = "ce1fe2caed275a2392d23c7c5ee1882c";
    var i;
    for(i=0; i < this.data.artist.length;i++){
      this.executeAxios1(i,this.data.artist[i].song,this.data.artist[i].name,apiKey)
    }
  }

  executeAxios1 (index,name,song,key){
    axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?'+
    'q_track='+song+
    '&q_artist='+name+
    '&apikey='+key)
    .then(response => {
      const lyrics = response.data.message.body.lyrics.lyrics_body;
      this.data.artist[index].lyric = lyrics;
    });

    axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?'+
    'q_track='+name+
    '&q_artist='+song+
    '&apikey='+key)
    .then(response => {
      const artist = response.data.message.body.track_list[0].track.artist_name;
      const track = response.data.message.body.track_list[0].track.track_name;
      const album = response.data.message.body.track_list[0].track.album_name;
      this.data.artist[index].name = artist
      this.data.artist[index].song = track;
      this.data.artist[index].album = album;
      this.setState(this.data.artist=this.data.artist)
    });
  }

  data = {
    artist: [
      {name: "The Weeknd", song: "In The Night", album:"", lyric: "", cover: "https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/the-weeknd-beauty-behind-the-madness_xbxnis/the-weeknd"},
      {name: "The Weeknd", song: "Die For You", album:"", lyric: "", cover: "https://heavyeditorial.files.wordpress.com/2016/09/starboy1.jpg?quality=65&strip=all&w=780&h=780"},
      {name: "Guaynaa", song: "Rebota-Remix", album:"", lyric: "", cover: "http://urfavoritemusic.com/wp-content/uploads/2019/07/Rebota-Remix.jpg"},
      {name: "Lunay", song: "A Solas-Remix", album:"",lyric: "", cover: "https://i.pinimg.com/736x/69/a2/78/69a278d11a198dd7bcec1a82194364b7.jpg"},
      {name: "Maluma", song: "11 pm", album:"",lyric: "", cover: "http://www.airelatino.fm/wp-content/uploads/2019/05/maluma_11.11.jpg"},
      {name: "Nicky Jam", song: "Te Robare", album:"",lyric: "", cover: "https://www.boss-sound.com/wp-content/uploads/2019/03/Nicky-Jam-Te-Robaré-Ft.-Ozuna-696x696.jpg"},
      {name: "Romeo Santos", song: "Fui a Jamaica", album:"",lyric: "", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/27/71/6e/27716ed0-4995-3ac0-85b5-fb85d536b0db/886444433297.jpg/600x600bf.png"},
      {name: "Romeo Santos", song: "Carmín", album:"",lyric: "", cover: "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/7d/c1/66/7dc16620-7d33-f1eb-c52b-0cb9a3df06b4/886446557991.jpg/600x600bf.png"},
      {name: "Romeo Santos", song: "Años Luz", album:"",lyric: "", cover: "https://cdn.smehost.net/sonymusiclatincom-uslatinprod/wp-content/uploads/2019/04/romeosantosutopia.png"},
      {name: "Sia", song: "Helium", album:"",lyric: "", cover: "https://images.genius.com/71bb209b9ba0012ad37b5e1763c12173.1000x1000x1.jpg"}
    ]
  }

  render() {
    return (
      <BrowserRouter>
        <div className={classes.container}>
          <h2 className={classes.title}>My favorite songs!</h2>
          <div className={classes.list}>
            <Route path ="/" exact render = {() => <Songs songs = {this.data.artist} />} />
          </div>
        </div>

        <Route path ="/song/:songIndex" exact render = {() => (
          <FullSong openSong = {(songIndex) => this.openSong(songIndex)} />
        )} />
      </BrowserRouter>
    )
  }
  
  openSong = (songIndex) => {
    return this.data.artist[songIndex];
  }
}

export default App;
