import React from "react";
import SongItem from "../item/SongItem";

export default function SongsList(props) {
  return (
    <div>
      {props.songs.map(song => {
        return <SongItem key={song.track_share_url}  song={song} openSong={props.openSong}></SongItem>;
      })}
    </div>
  );
}
