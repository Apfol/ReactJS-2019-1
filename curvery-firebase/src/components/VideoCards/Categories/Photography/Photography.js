import React, {Component} from 'react';

import YoutubeApiAxios from '../../../../services/YoutubeApiAxios';

import './Photography.css';

class Photography extends Component{
  
  state = {
    playlists: [],
    q:`Photography`,
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
        <div class="contain_PHOTOGRAPHY">
        <div class="row_PHOTOGRAPHY">
        <h1 className="categorieTitle_PHOTOGRAPHY">Photography and Video</h1>
        <div class="row__inner_PHOTOGRAPHY">
        <div class="spaceLeft_PHOTOGRAPHY"></div>
        {this.state.playlists.map(
            course =>
            <div class="tile_PHOTOGRAPHY">
            <div class="tile__media_PHOTOGRAPHY">
            <img class="tile__img_PHOTOGRAPHY" src={course.snippet.thumbnails.high.url} alt=""  />
        </div>
        <div class="tile__details_PHOTOGRAPHY">
          <div class="tile__title_PHOTOGRAPHY">
          {course.snippet.title}
          </div>
        </div>
      </div>
    )}
    <div class="spaceRight_PHOTOGRAPHY"></div>
    </div>
  </div>

</div>

    )
}
}
export default Photography;