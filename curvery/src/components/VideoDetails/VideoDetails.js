import React, { Component } from "react";
import details from './VideoDetails.css';

export class VideoDetails extends Component {
  state = {
    video_info: {
      progress: 0,
      notes: []
    }
  };
  
  render() {
    return (
        <div className={details.video_details}>
          <h2>VideoPlayer</h2>
          <iframe src={this.props.video.videoUrl} width="100%" height="800px"/>
          <p>{this.props.video.title}</p>
        </div>
    );
  }
}

export default VideoDetails;
