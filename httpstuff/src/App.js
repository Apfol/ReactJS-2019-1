import React, {Component} from 'react';
import Cards from './Components/cards.js'
import classes from './App.css';
import axios from './AxiosInstance';

class App extends Component{

  state = {
    cards: [],
    newCardInfo: {
      album: "",
      artist: "",
      genre: "",
      img:""
    }
  }

  componentDidMount(){
    this.setState({loading:true});
    axios.get('/music')
    .then(response =>{
      let updatedcards= response.data;
      updatedcards=updatedcards.map(music =>{
        return {
          artist: music.Artist,
          album: music.Album,
          genre: music.Genre,
          img:music.img
        }
      });
      this.setState({
        cards:updatedcards
      });
      console.log(this.state.cards)
    })
    .catch(this.setState({error:true}))
    .then(this.setState({loading:false})) 
  }
render(){
  
  return (
    <div className={classes.App}>
      <h className={classes.Appheader}>MY ALBUM LIST</h>
      <Cards
        cards={this.state.cards}
      />
  
    </div>
  );
}
   
  }
    
  
  


export default App;
