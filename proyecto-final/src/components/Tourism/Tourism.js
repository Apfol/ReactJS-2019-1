
import React, { Component } from 'react';
import axios from '../axiosInstance';
import Places from '../Places/Places';

export default class Tourism extends Component {

    state = {
        touristPlaces: [],
    }

    componentDidMount() {
        axios.get('/touristPlaces')
            .then(response => {
                var updatedPlaces = response.data;
                updatedPlaces = updatedPlaces.map(place => {
                    return {
                        title: place.title,
                        description: place.description,
                        score: place.score,
                        img: place.img,
                    }
                });
                console.log(updatedPlaces);
                this.setState({
                    touristPlaces: updatedPlaces,
                });
            })
            .catch(error => {
            });
    }

    render() {
        return (
            <div>
                <Places touristPlaces={this.state.touristPlaces}></Places>
            </div>
        )
    }
}

