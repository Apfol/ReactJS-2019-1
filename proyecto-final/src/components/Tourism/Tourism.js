
import React, { Component } from 'react';
import axios from '../axiosInstance';
import TouristPlaceCard from '../TouristPlaceCard/TouristPlaceCard';
import { Container, Row, Col } from 'react-bootstrap';
import PlaceDetailed from '../PlaceDetailed/PlaceDetailed';

export default class Tourism extends Component {

    state = {
        touristPlaces: [],
        idPlaceSelected: null,
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
        this.setState({
            idPlaceSelected: itemPosition,
        });
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
                            handleClick={this.onClickCard.bind(this)}
                            id={place.id}
                        />
                    )
                })}
            </div>
        )
    }
    
    getPlace(idPlace) {
        this.state.touristPlaces.forEach((place) => {
            if (place.id === idPlace) {
                console.log(place);
                return place;
            }; 
        })
    }

    render() {
        if (this.state.idPlaceSelected === null) {
            return (
                <div>
                    {this.getPlaces()}
                </div>
            )
        } else {
            return (
                <Container>
                    <Row>
                        <Col>{this.getPlaces()}</Col>
                        <Col>
                            <PlaceDetailed 
                            title={this.state.touristPlaces[this.state.idPlaceSelected - 1].title}
                            description={this.state.touristPlaces[this.state.idPlaceSelected - 1].description} />
                        </Col>
                    </Row>
                </Container>
            )
        }
    }
}

