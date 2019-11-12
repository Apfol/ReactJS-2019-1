import React, { Component } from "react";

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
            <div>
                {/* NOTES STUFF*/}
                <textarea
                    name="notes"
                    // value={this.state.notes}
                    onChange={this.handleNotesChange}
                ></textarea>
                <button onClick={this.onSaveNotesClick}>Save notes</button>
            </div>
        );
    }
}
