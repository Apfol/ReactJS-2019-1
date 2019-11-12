import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import YoutubeApiAxios from '../../../../services/YoutubeApiAxios';

import './Illustracion.css';

class Illustracion extends Component {

  state = {
    playlists: [],
    q: `Illustration`,
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
      <div className="contain_ILLUSTRATION">
        <div className="row_ILLUSTRATION">
          <h1 className="categorieTitle_ILLUSTRATION">ILLUSTRATION</h1>
          <div className="row__inner_ILLUSTRATION">
            <div className="spaceLeft_ILLUSTRATION"></div>
            {this.state.playlists.map(
              course =>

                <div className="tile_ILLUSTRATION">
                  <Link  to={"/player/" + course.id.playlistId}>
                    <div className="tile__media_ILLUSTRATION">
                      <img className="tile__img_ILLUSTRATION" src={course.snippet.thumbnails.high.url} alt="" />
                    </div>
                    <div className="tile__details_ILLUSTRATION">
                      <div className="tile__title_ILLUSTRATION">
                        {course.snippet.title}
                      </div>
                    </div>
                  </Link>
                </div>

            )}
            <div className="spaceRight_ILLUSTRATION"></div>
          </div>
        </div>

      </div>

    )
  }
}
export default Illustracion;