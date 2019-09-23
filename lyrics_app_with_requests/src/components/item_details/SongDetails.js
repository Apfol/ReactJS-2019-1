import React, { Component } from 'react'
import axios from "../../services/axios_instances";

export default class SongDetails extends Component {
  state = {
    song: {},
    lyrics_body: ""
  }

  componentDidMount(){
    this.setState({
      song: this.props.song
    });
    this.getLyricsBody(this.props.match.params.track_id, this.props.match.params.commontrack_id);
  }

  getLyricsBody(track_id, commontrack_id) {
    axios
      .get("track.lyrics.get", {
        params: {
          ...axios.defaults.params,
          track_id: track_id,
          commontrack_id: commontrack_id
        }
      })
      .then(response => {
        console.log(response);
        this.setState({
            lyrics_body: (response.data.message.body.lyrics.lyrics_body.length > 0? response.data.message.body.lyrics.lyrics_body : response.data.message.body.lyrics.lyrics_copyright)
        });
      })
      .catch(error => {
        console.log("eror", error.message);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.song.track_name}</h1>
        <p>{this.state.lyrics_body}</p>
      </div>
    )
  }
}
