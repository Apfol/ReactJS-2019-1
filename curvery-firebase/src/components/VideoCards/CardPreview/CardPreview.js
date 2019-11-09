import React, {Component} from 'react';

import YoutubeApiAxios from '../../../services/YoutubeApiAxios';

import cards from './CardStyle.css'

class CardPreview extends Component{
    state = {
        playlists: [],
        q:`python`,
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
    /*componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://api.myjson.com/bins/16apk1')
        .then(res => {
            console.log(res);
            this.setState({courses: res.data});
        })
        .catch(error => {
            this.setState({error: error})
            alert('Hola el error es ' + error);
        })
    }*/
   
    render(){
        return(<div>
            <section class={cards.card}>
            {this.state.playlists.map(
                course => <div key={Date.now()} style={{ 'background-image': `url(${course.snippet.thumbnails.high.url})`}} className={cards.content_card} >
                <div className={cards.body_card}>
            <div className={cards.title_card}>
            <h3 className={cards.title1}>{course.snippet.title}</h3>
            <h2 className={cards.title2}>{course.snippet.title}</h2>
            </div>
            <div className={cards.button_card}>
            <div className={cards.button_body}>
            <h2 className={cards.button_title2}>{course.snippet.title}</h2>
            <a href="/"><button className={cards.button}><span>OBTENER</span></button></a>
            </div>
            </div>
            </div>

            </div>
            )}
            </section>
            </div>
        )
    }
}
export default CardPreview;