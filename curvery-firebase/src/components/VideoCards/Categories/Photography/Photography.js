import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import YoutubeApiAxios from '../../../../services/YoutubeApiAxios';

import './Photography.css';

class Photography extends Component {

  state = {
    playlists: [],
    q: `Photography`,
    courses: [],
    error: []
  }
  componentDidMount() {
    this.loadPlaylist();
  }


  loadPlaylist = async () => {
    const response = await YoutubeApiAxios.get("search", {
      params: {
        ...YoutubeApiAxios.defaults.params,
        part: "snippet",
        maxResults: 10,
        q: this.state.q,
        type: 'playlist'
      }
    });
    const someArray = response.data.items;
    this.setState({

      playlists: someArray

    });
    console.log(this.state.playlists);

  }
  render() {
    return (
      <div className="contain_PHOTOGRAPHY">
        <div className="row_PHOTOGRAPHY">
          <h1 className="categorieTitle_PHOTOGRAPHY">Photography and Video</h1>
          <div className="row__inner_PHOTOGRAPHY">
            <div className="spaceLeft_PHOTOGRAPHY"></div>
            {this.state.playlists.map(
              course =>
                <div className="tile_PHOTOGRAPHY">
                  <Link to={"/player/" + course.id.playlistId}>
                    <div className="tile__media_PHOTOGRAPHY">
                      <img className="tile__img_PHOTOGRAPHY" src={course.snippet.thumbnails.high.url} alt="" />
                    </div>
                    <div className="tile__details_PHOTOGRAPHY">
                      <div className="tile__title_PHOTOGRAPHY">
                        {course.snippet.title}
                      </div>
                    </div>
                  </Link>
                </div>
            )}
            <div className="spaceRight_PHOTOGRAPHY"></div>
          </div>
        </div>

      </div>

    )
  }
}
export default Photography;