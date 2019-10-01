import React,{Component} from 'react';
// import Buttons from './Buttons';
import video from './Video.css';
class Video extends Component {

    

     playVideo() {
      // You can use the play method as normal on your video ref
      setTimeout(function() { //Start the timer
        this.refs.vidRef.play();
    }.bind(this), 1000)

    }
    
    pauseVideo() {
      // Pause as well
      this.refs.vidRef.pause();
    }
    
    // You can pass your function references to your child components as props (here passing down to the Buttons component)
    render() {
      return(
        <div className={video.container}>
          <video className={video.video} ref="vidRef" src="https://thumbs.gfycat.com/JollyLinearIbadanmalimbe-mobile.mp4" onMouseOver={this.playVideo.bind(this)} onMouseOut={this.pauseVideo.bind(this)} type="video/mp4" loop></video>
         
        </div>
      );
    }
  }

  export default Video;