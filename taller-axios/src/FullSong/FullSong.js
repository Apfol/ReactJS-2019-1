import React from 'react';
import classes from './FullSong.css';
import { withRouter } from 'react-router-dom';
import back from '../flecha.png';
import { Link } from 'react-router-dom';
import photo from '../listen-on-spotify-logo.png';

const FullSong = props=> {
    var openSong = props.openSong(props.match.params.songIndex);
    console.log(openSong);
    return (
        <div>
            <Link to="/" className={classes.back}>
                <img alt="cover"className={classes.backButton} src={back}></img> 
                <p className={classes.text}>back</p>
            </Link>
            <div className={classes.list}>
                <div className={classes.up}>
                    <div className={classes.imageContainer}>
                        <img alt="cover"className={classes.image} src={openSong.album.images[0].url}></img>
                    </div> 
                    <div className={classes.dataContainer}>
                        <div className={classes.info}>
                            <h3>Song: </h3><p className={classes.text}>{openSong.song}</p>
                        </div>
                        <div className={classes.info}>
                            <h3>Artist: </h3><p className={classes.text}>{openSong.artist.map(t => 
                                t.name + " ")}</p>
                        </div>
                        <div className={classes.info}>
                            <h3>Album: </h3><p className={classes.text}>{openSong.album.name}</p>
                        </div>
                        <div className={classes.info}>
                            <h3>Release date: </h3><p className={classes.text}>{openSong.album.release_date}</p>
                        </div>
                    </div>
                </div>
                <a href={openSong.album.external_urls.spotify} target="_blank">
                    <img alt="cover"className={classes.image} src={photo}></img>
                </a>
            </div>
        </div>
    );
}

export default withRouter(FullSong);