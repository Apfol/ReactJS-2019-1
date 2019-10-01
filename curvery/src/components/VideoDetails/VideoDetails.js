import React, { Component } from "react";
import './VideoDetails.css';

export class VideoDetails extends Component {
  state = {
    video_info: {
      progress: 0,
      notes: []
    }
  };
  
  render() {
    return (
        <div className="video-details">
          <h2>VideoPlayer</h2>
          <iframe src={this.props.video.url} width="90%" height="800px"/>
          <p>{this.props.video.title}</p>
        </div>
    );
  }
}

export default VideoDetails;
