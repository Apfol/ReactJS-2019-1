import React, {Component} from 'react';
import './App.css';
import ArtistBox from "./Modules/ArtistBox"
import {gettopartists} from './Modules/ApiClient'



export default class App extends Component {
  state = {    
    artistList: [],
    artistSelected:"Juanes"
  }

  componentDidMount () {
    gettopartists()
        .then(data => this.setState({artistsList:data}))        
  }  
  

  render() {
  const artist = {
    albumId: "A",
    name: this.state.artistSelected,
    image:"https://pbs.twimg.com/profile_images/1106225279918329867/zyPV96RA_400x400.jpg",
    listeners: "12"
  }  

  return (
    <div className="App"> 
      <h1>Los mejores albumes de: </h1> 
      {console.log(this.state.artistList)}
      {this.state.artistList.map(item =>
      {return <ArtistBox artist =  {item} />}      
      )}        
                    
    </div>
  );
  }
}

