import React, {Component} from 'react';
import axios from 'axios';
import movieStyle from './Movie.css';

class Movie extends Component{
    state = {
        movies: [],
        error: []
    }
    componentDidMount(){
        //json creado y alojado sin necesidad de permisos 
        axios.get('https://api.myjson.com/bins/16apk1')
        .then(res => {
            console.log(res);
            this.setState({movies: res.data});
        })
        .catch(error => {
            this.setState({error: error})
            alert('Hola el error es ' + error);
        })
    }
    render(){
       
           
            return(
                <div key={Date.now()} className={movieStyle.card}>
                {this.state.movies.map(
                    movie => <div className={movieStyle.containerMovie}>
                    <div className={movieStyle.images}>
                    <img src={movie.image} alt={movie.title} key={movie.id}></img>
                    </div>
                    <div className={movieStyle.movie}>
                    <p>{movie.title}</p>
                    <h1>{movie.title}</h1>
                    <h2>2019</h2>
                    <p className={movieStyle.body}>{movie.body}</p>
                    </div>
                    </div>
                    )}
                </div>
                )
    }
}

export default Movie;