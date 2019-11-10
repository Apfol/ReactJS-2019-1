import React, { Component } from 'react';
import TouristPlaceCard from '../TouristPlaceCard/TouristPlaceCard';
import PlaceDetailed from '../PlaceDetailed/PlaceDetailed';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Tourism.css';

import * as actionCreators from '../../store/actions/';
import CommentForm from '../CommentForm/CommentForm';

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
        newCommentInfo: {
            author: "",
            body: "",
            title: "",
        }
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
        if (this.state.isUserLoggedIn == false) {
            return (
                this.onUserLogOut()
            )
        }
        else {
            return (
                this.onUserLogIn()
            )
        }
    }

    onUserLogIn() {
        return (
            <div className={classes.container}>
                <Route path="/tourism/" exact>{this.getPlaces()}</Route>
                <Route path="/tourism/:placeId" exact render={() => (
                    <div>
                        <PlaceDetailed place={this.state.placeSelected} />
                        <CommentForm
                            newCommentInfo={this.state.newCommentInfo}
                            updateCommentInfo={this.updateCommentInfo}
                            submitCommentForm={this.submitCommentForm}
                        />
                    </div>
                )} />
            </div>
        )

    }

    updateCommentInfo = (event, type) => {
        var updatedCommentInfo = {
            ...this.state.newCommentInfo
        }

        updatedCommentInfo[type] = event.target.value;

        this.setState({
            newCommentInfo: updatedCommentInfo,
        });
    }

    submitCommentForm = () => {
        var commentData = {
            ...this.state.newCommentInfo
        };

        commentData['author'] = this.props.userLoggedIn.userName;

        this.props.onSaveComment(commentData, this.state.placeSelected.id - 1);
        this.props.onFetchTourism();

        this.setState({
            newCommentInfo: {
                author: "",
                body: "",
                title: "",
            },
            places: this.props.places,
        });
    }

    onUserLogOut() {
        return (
            <div className={classes.container}>
                <Route path="/tourism/" exact>{this.getPlaces()}</Route>
                <Route path="/tourism/:placeId" exact render={() => (
                    <div>
                        <PlaceDetailed place={this.state.placeSelected} />
                        <h1 className={classes.sesion}>Inicia Sesion para comentar tu experiencia</h1>
                    </div>
                )} />
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
        onSaveComment: (commentData, idPlace) => dispatch(
            actionCreators.saveComment(commentData, idPlace)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tourism);

