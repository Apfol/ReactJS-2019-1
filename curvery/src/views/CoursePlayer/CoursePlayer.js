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
    const response = await YoutubeApiAxios.get("playlistItems", {
      params: {
        ...YoutubeApiAxios.defaults.params,
        part: "snippet",
        maxResults: 50,
        playlistId: `${this.props.match.params.playlistId}`
      }
    });
    console.log(response.data.items[0].snippet.resourceId.videoId);
    this.setState({
      videos: response.data.items.map(item=>{
        return {
          ...item.snippet,
          videoUrl:`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?controls=1?autoplay=1`
        }
      }),
      selectedVideo: {
        ...response.data.items[0].snippet,
        videoUrl:`https://www.youtube.com/embed/${response.data.items[0].snippet.resourceId.videoId}?controls=1`        
      }
    });

    console.log("Selected video ",this.state.selectedVideo);
    
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
          <VideoList videos={this.state.videos} onSelectVideo={this.onVideoSelect}>
            </VideoList>
      </div>
    );
  }
}

export default CoursePlayer;
