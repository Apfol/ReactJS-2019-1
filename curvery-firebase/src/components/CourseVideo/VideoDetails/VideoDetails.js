import React, { Component } from "react";
import './VideoDetails.css';
import ReactPlayer from 'react-player'
// import ReactPlayer from '../../../ReactPlayer/ReactPlayer';

export class VideoDetails extends Component {
  state = {
    url: null,
    pip: true,
    playing: true,
    controls: false,
    light: true,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }

  handleToggleControls = () => {
    const url = this.state.url
    this.setState({
      controls: !this.state.controls,
      url: null
    }, () => this.load(url))
  }

  handleToggleLight = () => {
    this.setState({ light: !this.state.light })
  }

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handleEnablePIP = () => {
    console.log('onEnablePIP')
    this.setState({ pip: true })
  }

  handleDisablePIP = () => {
    console.log('onDisablePIP')
    this.setState({ pip: false })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  renderLoadButton = (url, label) => {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = player => {
    this.player = player
  }
 
  render () {
    const { playing, controls, light, volume, muted, loop, played, playbackRate, pip } = this.state

    return (
      <div className='videoDetails_VIDEODETAILS'>
        <section className='section_VIDEODETAILS'>
        <div className="videoControlsContainer_VIDEODETAILS">
        <div className='player-wrapper_VIDEODETAILS'>
        <h1>{this.props.video.title}</h1>
          <ReactPlayer
          ref={this.ref}
          className='react-player_VIDEODETAILS'
          url={this.props.video.videoUrl}
          width="50vw"
          height="60vh"
          pip={pip}
          playing={playing}
          controls={controls}
              light={light}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.handlePlay}
              onEnablePIP={this.handleEnablePIP}
              onDisablePIP={this.handleDisablePIP}
              onPause={this.handlePause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.handleEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
              />
              </div>
              <div className="controlOverScreen_VIDEODETAILS">
              <div className="containerControls_VIDEODETAILS">
              <div className="playContainer_VIDEODETAILS">
              <button className="play_VIDEODETAILS" onClick={this.handlePlayPause}>{playing ? <img className="iconVolumen_VIDEODETAILS" src="https://image.flaticon.com/icons/svg/151/151859.svg" alt=""></img>  : <img className="iconVolumen_VIDEODETAILS" src="https://image.flaticon.com/icons/svg/149/149657.svg" alt=""></img> }</button>
              </div>
              <div className="durationContainer_VIDEODETAILS">
              <div className="duration_VIDEODETAILS" >
              <input
              type='range' min={0} max={1} step='any'
              value={played}
              onMouseDown={this.handleSeekMouseDown}
              onChange={this.handleSeekChange}
              onMouseUp={this.handleSeekMouseUp}
              />
              </div>
              </div>
              
              <div className="volumenContainer_VIDEODETAILS">
              <div className="volumen_VIDEODETAILS">
              <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
              </div>

              </div>
              <div className="mutedContainer_VIDEODETAILS">
              <button className="muted_VIDEODETAILS" onClick={this.handleToggleMuted}>{muted ? <img className="iconVolumen_VIDEODETAILS" src="https://image.flaticon.com/icons/svg/149/149687.svg" alt=""></img> : <img className="iconVolumen_VIDEODETAILS" src="https://image.flaticon.com/icons/svg/149/149682.svg" alt=""></img>}</button>
              </div>
              <div className="velocityContainer_VIDEODETAILS">
          <div className="dropdown_VIDEODETAILS">
          <button className="dropbtn_VIDEODETAILS"><img className="iconVolumen_VIDEODETAILS" src="https://image.flaticon.com/icons/svg/0/128.svg" alt=""></img></button>
          <div className="dropdown-content_VIDEODETAILS">
          <button onClick={this.handleSetPlaybackRate} value={1}>1x</button>
          <button onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
          <button onClick={this.handleSetPlaybackRate} value={2}>2x</button>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </section>
          </div>
      )
  }
}

export default VideoDetails;
