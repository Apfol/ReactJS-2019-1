import React, { Component } from "react";
import VideoDetails from "../VideoDetails";
import VideoList from "../VideoList";

import './CoursePlayer.css';
export class CoursePlayer extends Component {
  render() {
    // const videoUrl = `https://www.youtube.com/embed/${this.props.video.url}?controls=1`;
    const videoUrl = `https://www.youtube.com/embed/6vX8wT1G798?controls=1`;

    return (
      <div className="container">
          <VideoDetails video={{url:videoUrl}} ></VideoDetails>
          <VideoList 
            videos={
                {list: 
                    [{title:"I.1: Random Walker - The Nature of Code",url:"rqecAdEGW6I"},
                    {title:"I.2: Probability Basics - The Nature of Code", url:"frh0coyRmJQ"},
                    {title:"I.3: Gaussian Distribution - The Nature of Code",url:"8uyR-YU_0dg"}]}}>
            </VideoList>
      </div>
    );
  }
}

export default CoursePlayer;
