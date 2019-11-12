import React, { Component } from 'react';
import PlaceDetailed from '../../components/PlaceDetailed/PlaceDetailed';
import CommentForm from '../../components/CommentForm/CommentForm';

class TourismLogin extends Component {
    render() {

        const { params } = this.props.match;
        const place = this.props.places.find(({ id }) => id === params.id);

        return (
            <div>
                <PlaceDetailed place={place} />
                <CommentForm
                    newCommentInfo={this.state.newCommentInfo}
                    updateCommentInfo={this.updateCommentInfo}
                    submitCommentForm={this.submitCommentForm}
                />
            </div>
        );
    }
}

export default TourismLogin;