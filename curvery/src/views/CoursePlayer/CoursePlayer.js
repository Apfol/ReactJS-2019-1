import React, { Component } from "react";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideosList/VideoList";
import './CoursePlayer.css';

import YoutubeApiAxios from '../../services/YoutubeApiAxios';

export class CoursePlayer extends Component {

  state = {
    selectedVideo: {},
    videos:[]
  }

  componentDidMount(){
    this.loadPlaylist();
  }

  loadPlaylist =  async ()=>{
    const response = await YoutubeApiAxios.get("playlists", {
      params: {
        ...YoutubeApiAxios.defaults.params,
        part: "snippet",
        maxResults: 100,
        playlistId: `${this.props.match.playlistId}`
      }
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items.map(item=>{
        return {
          ...item.snippet,
          videourl:`https://www.youtube.com/embed/${item.resourceId.videoId}?controls=1`
        }
      }),
      selectedVideo: {
        ...response.data.items[0].snippet,
        videourl:`https://www.youtube.com/embed/${response.data.items[0].resourceId.videoId}?controls=1`        
      }
    });
  }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };


  render() {
    return (
      <div className="container">
          <VideoDetails video={this.state.selectedVideo} ></VideoDetails>
          <VideoList 
            videos={this.state.videos}>
            </VideoList>
      </div>
    );
  }
}

export default CoursePlayer;
