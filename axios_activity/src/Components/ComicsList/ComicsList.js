import React from 'react';
import axios from 'axios';
import Comic from './Comic/Comic';
import './ComicsList.css';

class ComicList extends React.Component {

    constructor(props){
        super(props);
  
        this.state = {
            comicsList: [],
            loading: true,
            error: ""
        }      
    }
  
    componentDidMount(){
      //GET
      axios.get('http://gateway.marvel.com/v1/public/comics?apikey=a468e6ef7d5e799b97b8845e255029d0&hash=121ea53af24d4e8d09aebd58c4e773aa&ts=1')
            .then(response => {
                const marvelData = response.data.data.results.filter(comic => comic.images.length > 0 && !comic.title.includes("Official Handbook")).slice(0,10);
                const firstComics = marvelData.map(comic => {
                    return {
                        title: comic.title.slice(0,25),
                        images: comic.images,
                        description: comic.description.slice(0,200),
                        characters: comic.characters.items
                    }
                  });
                this.setState({comicsList: firstComics})
            })
            .catch(error => this.setState({error: error}))
            .then(()=>this.setState({loading: false}))
    }

    render(){
        console.log(this.state)
        return(
            <ul className="comicList">
                {this.state.comicsList.map((comic,index) => <Comic key={index} comicData = {comic}/> )}
            </ul>
        )
    }

}

export default ComicList;