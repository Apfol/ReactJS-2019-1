import React, { Component } from "react";
import './VideoNotes.css';
export default class VideoNotes extends Component {
    state = {
        notes: ""
    };

    componentWillMount() {
        // GET THE NOTES FROM FIREBASE FOR THAT VIDEO AND COURSE AND SET THE STATE
        console.log("PROPS DEL NOTES ",this.props);
        
    }
    handleNotesChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSaveNotesClick = event => {
        console.log("Notes onClick ", this.state.notes);

        //Push notes for the video
    };

    render() {
        return (
            <div className="videoNotes_VIDEONOTES">
                {/* NOTES STUFF*/}
                <h1>Notes</h1>
                <textarea
                className="Comments_VIDEONOTES"
                    name="notes"
                    // value={this.state.notes}
                    onChange={this.handleNotesChange}
                ></textarea>
                <button className="commentsButton_VIDEONOTES" onClick={this.onSaveNotesClick}>Save notes</button>
            </div>
        );
    }
}
