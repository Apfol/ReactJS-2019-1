import React from 'react';
import classes from './Song.css';
import { Link } from 'react-router-dom';

var Songs = (props) => {
    return(
        <Link className={classes.link} to={"/song/"+props.songIndex}>
            <section className={classes.container}>
                <div className={classes.imageContainer}>
                    <img alt="cover"className={classes.image} src={props.song.cover}></img>
                </div>
                <div className={classes.dataContainer}>
                    <div className={classes.info}>
                        <h4>Song: </h4><p className={classes.text}>{props.song.song}</p>
                    </div>
                    <div className={classes.info}>
                        <h4>Artist: </h4><p className={classes.text}>{props.song.name}</p>
                    </div>
                    <div className={classes.info}>
                        <h4>Album: </h4><p className={classes.text}>{props.song.album}</p>
                    </div>
                </div>
            </section>
        </Link>
    );
}

export default Songs;