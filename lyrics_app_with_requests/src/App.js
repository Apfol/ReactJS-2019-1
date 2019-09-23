import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/layout/header";
import SearchLyrics from "./components/search/search_lyrics";
import SongsList from "./components/items_list/SongsList";

import emailjs from "emailjs-com";
import axios from "./services/axios_instances";

import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

import SongDetails from './components/item_details/SongDetails';

export default class App extends Component {
  state = {
    songTitle: "",
    songs: [],
    selectedSong: {}    
  };

  openSong = song => {
    console.log("Sharing the song");
    this.setState({
      selectedSong: song
    });
  };

  searchLyrics = ({ songTitle, artist }) => {
    console.log(songTitle, artist);
    console.log(axios.defaults.params);

    axios
      .get("/track.search", {
        params: {
          ...axios.defaults.params,
          q_track: songTitle,
          q_artist: artist,
          page_size: 10,
          page: 1,
          s_track_rating: "desc"
        }
      })
      .then(response => {
        console.log(response.data.message.body.track_list);
        const updatedSongs = response.data.message.body.track_list.map(item => {
          return {
            track_name: item.track.track_name,
            album_name: item.track.album_name,
            artist_name: item.track.artist_name,
            track_rating: item.track.track_rating,
            has_lyrics: item.track.has_lyrics,
            track_share_url: item.track.track_share_url,
            track_id: item.track.track_id,
            commontrack_id: item.track.commontrack_id
          };
        });

        this.setState({
          songTitle: songTitle,
          songs: updatedSongs
        });
      })
      .catch(error => {
        console.log("Ocurrio error 💆", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Header></Header>
                  <SearchLyrics searchLyrics={this.searchLyrics}></SearchLyrics>
                  <SongsList songs={this.state.songs} openSong={this.openSong}></SongsList>
                </div>
              );
            }}
          ></Route>

          <Route exact path="/song_details/:track_id/:commontrack_id" render={(props)=>{
            return (
              <SongDetails {...props} song={this.state.selectedSong}></SongDetails>
            );
          }}></Route>
        </div>
      </BrowserRouter>
    );
  }
}
