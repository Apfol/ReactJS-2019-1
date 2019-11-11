import React, {Component} from 'react';
import './Cards.css';
import YoutubeApiAxios from '../../services/YoutubeApiAxios';

class Cards extends Component{
  
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
        <div>
        <main className="grid_CardPreview">
        {this.state.playlists.map(
            course => <article  style={{ 'background-image': `url(${course.snippet.thumbnails.high.url})`}} className="card_CardPreview">
            <div className="text_CardPreview">
            <h3>{course.snippet.title}</h3>
        </div>
        </article>
      )}
    </main>
        </div>
    )
}
}
export default Cards;