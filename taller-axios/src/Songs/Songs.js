import React from 'react';
import classes from './Songs.css';
import Song from '../Song/Song.js';

var Songs = (props) => {
    return(
        <section className={classes.container}>
            {props.songs.map((song, songIndex) => {
                return (
                    <Song song = {song} songIndex = {songIndex} key = {songIndex}/>
                )
            })}
        </section>
    );
}

export default Songs;