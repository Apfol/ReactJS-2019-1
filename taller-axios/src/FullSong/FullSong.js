import React from 'react';
import classes from './FullSong.css';
import { withRouter } from 'react-router-dom';
import back from '../flecha.png';
import { Link } from 'react-router-dom';

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
                        <img alt="cover"className={classes.image} src={openSong.cover}></img>
                    </div> 
                    <div className={classes.dataContainer}>
                        <div className={classes.info}>
                            <h3>Song: </h3><p className={classes.text}>{openSong.song}</p>
                        </div>
                        <div className={classes.info}>
                            <h3>Artist: </h3><p className={classes.text}>{openSong.name}</p>
                        </div>
                        <div className={classes.info}>
                            <h3>Album: </h3><p className={classes.text}>{openSong.album}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.down}>
                    <div className={classes.dataContainer}>
                        <div className={classes.info}>
                            <h3>Lyrics: </h3><p className={classes.lyrics}>{openSong.lyric}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(FullSong);