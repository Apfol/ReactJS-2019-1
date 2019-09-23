import React, {Component} from 'react';
import Movie from './Movie'
import MovieListStyle from './MovieList.css';
class MovieList extends Component{
   
    render(){
        return(
            <div className={MovieListStyle.containerMovie}>
            <h1 className={MovieListStyle.title}>Proximas Peliculas</h1>
            <div className={MovieListStyle.column}>
            <Movie></Movie>
            </div>
            </div>
        )
    }
}

export default MovieList;