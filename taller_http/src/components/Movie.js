import React, {Component} from 'react';
import axios from 'axios';


class Movie extends Component{
    state = {
        movies: [] 
    }
    componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://api.myjson.com/bins/16apk1')
        .then(res => {
            console.log(res);
            this.setState({movies: res.data});
        })
    }
    render(){
        return(
            <div key={Date.now()}>
            {this.state.movies.map(
                movie => <div>
                <div className="images">
                <img src={movie.image} alt={movie.title} key={movie.id}></img>
                </div>
                <div className="movie">
                <p>{movie.title}</p>
                <h1>{movie.title}</h1>
                <h2>fecha</h2>
                <p>{movie.body}</p>
                </div>
                </div>
                )}
            <p>hola hpta</p>
            </div>        )
    }
}

export default Movie;