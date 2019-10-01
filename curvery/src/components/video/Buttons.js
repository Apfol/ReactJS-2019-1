import React,{Component} from 'react';

class Buttons extends Component {
    render(){
      return(
        <div>
          <button id='playButton' onClick={this.props.playVideo}>Play!</button>
          <button id='pauseButton' onClick={this.props.pauseVideo}>Pause!</button>
        </div>
      );
    }
  }

  export default Buttons;