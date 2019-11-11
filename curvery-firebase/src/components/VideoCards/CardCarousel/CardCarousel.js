import React, {Component} from 'react';

import YoutubeApiAxios from '../../../services/YoutubeApiAxios';

import './CardCarousel.css';

class CardCarousel extends Component{
  
  state = {
    playlists: [],
    q:`react`,
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
        <div class="contain_CARDCROUSEL">


  <div class="row_CARDCROUSEL">
    <div class="row__inner_CARDCROUSEL">
    <div class="spaceLeft_CARDCROUSEL"></div>
    {this.state.playlists.map(
        course =>
      <div class="tile_CARDCROUSEL">
        <div class="tile__media_CARDCROUSEL">
          <img class="tile__img_CARDCROUSEL" src={course.snippet.thumbnails.high.url} alt=""  />
        </div>
        <div class="tile__details_CARDCROUSEL">
          <div class="tile__title_CARDCROUSEL">
          {course.snippet.title}
          </div>
        </div>
      </div>
    )}
    <div class="spaceRight_CARDCROUSEL"></div>
    </div>
  </div>

</div>

    )
}
}
export default CardCarousel;