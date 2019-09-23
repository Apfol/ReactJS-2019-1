import React, { Component } from "react";
import classes from "./search_lyrics.css";

export default class SearchLyrics extends Component {
  state = {
    songTitle: "",
    artist: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchLyrics({ songTitle: this.state.songTitle, artist: this.state.artist });
    this.setState({
      songTitle: "",
      artist: ""
    });
  };
  render() {
    return (
      <div className={classes.searchLyrics}>
        <form onSubmit={this.onSubmit}>
          <input
            className={classes.input}
            name="songTitle"
            type="text"
            value={this.state.songTitle}
            onChange={this.onChange}
            placeholder="Song to search..."
          ></input>
          <input
            className={classes.input}
            name="artist"
            type="text"
            value={this.state.artist}
            onChange={this.onChange}
            placeholder="Artist..."
          ></input>

          <input
            className={classes.btnAdd}
            type="submit"
            value="Search"
          ></input>
        </form>
      </div>
    );
  }
}
