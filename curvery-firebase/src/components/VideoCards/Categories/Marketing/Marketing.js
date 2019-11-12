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
        <div className="contain_PROGRAMATION">
        <div className="row_PROGRAMATION">
        <h1 className="categorieTitle_PROGRAMATION">Marketing y bussines</h1>
        <div className="row__inner_PROGRAMATION">
        <div className="spaceLeft_PROGRAMATION"></div>
        {this.state.playlists.map(
            course =>
            <div className="tile_PROGRAMATION">
            <div className="tile__media_PROGRAMATION">
            <img className="tile__img_PROGRAMATION" src={course.snippet.thumbnails.high.url} alt=""  />
        </div>
        <div className="tile__details_PROGRAMATION">
          <div className="tile__title_PROGRAMATION">
          {course.snippet.title}
          </div>
        </div>
      </div>
    )}
    <div className="spaceRight_PROGRAMATION"></div>
    </div>
  </div>

</div>

    )
}
}
export default Marketing;