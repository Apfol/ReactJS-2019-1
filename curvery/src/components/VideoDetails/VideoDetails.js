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
          <p>Incididunt nisi qui Lorem consectetur dolore fugiat cupidatat ex in. Laboris tempor dolore cupidatat aliquip exercitation aliquip cillum. Ut sunt ut occaecat excepteur velit pariatur fugiat esse et deserunt. Duis cupidatat non duis sit sit amet et. Pariatur consequat ut nulla cupidatat cillum. Dolore sunt amet adipisicing aliquip eiusmod.</p>
        </div>
    );
  }
}

export default VideoDetails;
