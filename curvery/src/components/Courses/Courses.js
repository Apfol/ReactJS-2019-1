import React, { Component } from 'react';
import axios from 'axios';
import YoutubeApiAxios from '../../services/YoutubeApiAxios';
import {Link} from 'react-router-dom';

import recommendeds from './Courses.css'

class Courses extends Component {
    state = {
        playlists: [],
        error: []
    }
    componentDidMount() {
        this.loadPlaylist();
    }

    loadPlaylist = async () => {
        const response = await YoutubeApiAxios.get("search", {
            params: {
                ...YoutubeApiAxios.defaults.params,
                part: "snippet",
                maxResults: 50,
                q: `the nature of code`,
                type: 'playlist'
            }
        });
        const someArray = response.data.items;
        for(var i=0;i<44;i++)
        {
            someArray.pop();
        }
        this.setState({
            
            playlists: someArray

        });
        console.log(this.state.playlists);
        
    }
    render() {
        return (
            <div className={recommendeds.container}>
                <main className={recommendeds.grid}>
                    {this.state.playlists.map(
                        course => <article key={Date.now()} className={recommendeds.card}>
                            <img src={course.snippet.thumbnails.high.url} alt="Sample"></img>
                            <div className={recommendeds.text}>
                                <span>{course.snippet.channelTitle}</span>
                                <h3>{course.snippet.title}</h3>
                                <p>{course.snippet.description}</p>
                                <Link to={"/player/"+course.id.playlistId}>VER MÁS</Link>
                            </div>
                        </article>
                    )}
                </main>
            </div>
        )
    }
}
export default Courses;