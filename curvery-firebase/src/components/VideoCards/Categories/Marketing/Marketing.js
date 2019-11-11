import React, {Component} from 'react';

import YoutubeApiAxios from '../../../../services/YoutubeApiAxios';

import './Marketing.css';

class Marketing extends Component{
  
  state = {
    playlists: [],
    q:`Marketing`,
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
        <div class="contain_PROGRAMATION">
        <div class="row_PROGRAMATION">
        <h1 className="categorieTitle_PROGRAMATION">Marketing y bussines</h1>
        <div class="row__inner_PROGRAMATION">
        <div class="spaceLeft_PROGRAMATION"></div>
        {this.state.playlists.map(
            course =>
            <div class="tile_PROGRAMATION">
            <div class="tile__media_PROGRAMATION">
            <img class="tile__img_PROGRAMATION" src={course.snippet.thumbnails.high.url} alt=""  />
        </div>
        <div class="tile__details_PROGRAMATION">
          <div class="tile__title_PROGRAMATION">
          {course.snippet.title}
          </div>
        </div>
      </div>
    )}
    <div class="spaceRight_PROGRAMATION"></div>
    </div>
  </div>

</div>

    )
}
}
export default Marketing;