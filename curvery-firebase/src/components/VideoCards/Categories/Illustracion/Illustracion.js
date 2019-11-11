import React, {Component} from 'react';

import YoutubeApiAxios from '../../../../services/YoutubeApiAxios';

import './Illustracion.css';

class Illustracion extends Component{
  
  state = {
    playlists: [],
    q:`Illustration`,
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
        q:this.state.q,
        type: 'playlist'
      }
    });
    const someArray = response.data.items;
    this.setState({

      playlists: someArray

    });
    console.log(this.state.playlists);

  }
render(){
    return(
        <div class="contain_ILLUSTRATION">
        <div class="row_ILLUSTRATION">
        <h1 className="categorieTitle_ILLUSTRATION">ILLUSTRATION</h1>
        <div class="row__inner_ILLUSTRATION">
        <div class="spaceLeft_ILLUSTRATION"></div>
        {this.state.playlists.map(
            course =>
            <div class="tile_ILLUSTRATION">
            <div class="tile__media_ILLUSTRATION">
            <img class="tile__img_ILLUSTRATION" src={course.snippet.thumbnails.high.url} alt=""  />
        </div>
        <div class="tile__details_ILLUSTRATION">
          <div class="tile__title_ILLUSTRATION">
          {course.snippet.title}
          </div>
        </div>
      </div>
    )}
    <div class="spaceRight_ILLUSTRATION"></div>
    </div>
  </div>

  </div>

    )
}
}
export default Illustracion;