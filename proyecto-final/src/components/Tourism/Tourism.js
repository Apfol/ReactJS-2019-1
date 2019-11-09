import React, { Component } from 'react';
import TouristPlaceCard from '../TouristPlaceCard/TouristPlaceCard';
import PlaceDetailed from '../PlaceDetailed/PlaceDetailed';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/tourism.js';

class Tourism extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        places: this.props.places,
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
        this.props.onFetchTourism();
    }

    componentWillUpdate(nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchTourism();
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            places: nextState.places,
        });
    }

    onClickCard(itemPosition) {
        const place = this.state.places.find(({ id }) => id === itemPosition);
        this.setState({
            placeSelected: place,
        });
        console.log(place);
    }

    getPlaces = () => {
        return (
            <div>
                {this.state.places.map(place =>
                    <TouristPlaceCard
                        title={place.title}
                        description={place.description}
                        img={place.img}
                        score={place.score}
                        handleClick={this.onClickCard.bind(this)}
                        id={place.id}
                    />
                )}
            </div>
        )
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <Route path="/tourism/" exact>{this.getPlaces()}</Route>
                <Route path="/tourism/:placeId" exact render={() => (
                    <PlaceDetailed
                        place={this.state.placeSelected}
                    />
                )} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        places: state.tourismStore.places,
        loadingPlaces: state.tourismStore.loadingPlaces
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTourism: () => dispatch(actionCreators.fetchTourism()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tourism);

