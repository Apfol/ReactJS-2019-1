import axios from 'axios';
import React, {Component} from 'react';
import InfoImage from './infoImage.js';

class List extends Component{
    state = {
        infos:[

        ]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then( response => {
                var infoImages = response.data.slice(0, 20);
                var updateInfoImages = infoImages.map( infoImage =>{
                    return{
                        title: infoImage.title,
                        author: "Andrés",
                        url: infoImage.url,
                    }
                })
                this.setState({infos : updateInfoImages})
            })
    }

    render(){
        return(
            this.state.infos.map( info => 
                <InfoImage
                    title = {info.title}
                    author = {info.author}
                    url = {info.url}
                />
            )
        )
    }
}

export default List;