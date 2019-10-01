
import React, { Component } from 'react';
import axios from '../axiosInstance';
import TouristPlaceCard from '../TouristPlaceCard/TouristPlaceCard';
import PlaceDetailed from '../PlaceDetailed/PlaceDetailed';
import { BrowserRouter, Route } from 'react-router-dom';

export default class Tourism extends Component {

    state = {
        touristPlaces: [],
        placeSelected: {
            title: "",
            description: "",
            score: "",
            img: "",
            id: "",
            comments: [],
            detailedDescription: "",
        },
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
                        id: place.id,
                        comments: place.comments,
                        detailedDescription: place.detailedDescription,
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

    onClickCard(itemPosition) {
        const place = this.state.touristPlaces.find(({ id }) => id === itemPosition);
        this.setState({
            placeSelected: place,
        });
        console.log(place);
    }

    getPlaces = () => {
        return (
            <div>
                {this.state.touristPlaces.map(place => {
                    return (
                        <TouristPlaceCard
                            title={place.title}
                            description={place.description}
                            img={place.img}
                            score={place.score}
                            handleClick={this.onClickCard.bind(this)}
                            id={place.id}
                        />
                    )
                })}
            </div>
        )
    }


    render() {
        return (
            <BrowserRouter>
                <Route path="/tourism/" exact>{this.getPlaces()}</Route>
                <Route path="/tourism/:placeId" render={() => (
                    <PlaceDetailed
                        place={this.state.placeSelected}
                    />
                )} />
            </BrowserRouter>
        )
    }
}
