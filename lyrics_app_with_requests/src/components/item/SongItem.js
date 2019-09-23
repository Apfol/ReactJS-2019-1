import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SongItem.css";

export default class SongItem extends Component {
  onShareAction = () => {
    this.props.openSong(this.props.song);
  };

  render() {
    const link =
      this.props.song.has_lyrics !== 1 ? (
        "🤕 No lyrics"
      ) : (
        <Link
          className="todo_item_children open_song"
          to={
            "/song_details/" +
            this.props.song.track_id +
            "/" +
            this.props.song.commontrack_id
          }
        >
          Show
        </Link>
      );
    return (
      <div className="song_item">
        <h2 className="song_item_children">{this.props.song.track_name}</h2>
        <p className="song_item_children">{this.props.song.artist_name}</p>
        {link}
        <hr></hr>
      </div>
    );
  }
}
