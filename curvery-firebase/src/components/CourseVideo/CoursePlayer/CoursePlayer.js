import React, { Component } from "react";
//Component
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoList from "../VideosList/VideoList";
import "./CoursePlayer.css";

import YoutubeApiAxios from "../../../services/YoutubeApiAxios";
import { withFirebase } from "../../Firebase";
import { AuthUserContext } from "../../Session";
import { auth } from "firebase";
// import { AuthUserContext } from "../../Session";
export class CoursePlayer extends Component {
    state = {
        selectedVideo: {},
        videos: [],
        course_info: {
            title: "",
            videos_number: 0
        }
    };

    componentDidMount() {
        this.loadPlaylist();
    }

    loadPlaylist = async () => {
        const response = await YoutubeApiAxios.get("playlistItems", {
            params: {
                ...YoutubeApiAxios.defaults.params,
                part: "snippet",
                maxResults: 50,
                playlistId: `${this.props.match.params.playlistId}`
            }
        });
        console.log("Data curso ",response);
        this.setState({
            videos: response.data.items.map(item => {
                return {
                    ...item.snippet,
                    videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?controls=1?autoplay=1`
                };
            }),
            selectedVideo: {
                ...response.data.items[0].snippet,
                videoUrl: `https://www.youtube.com/embed/${response.data.items[0].snippet.resourceId.videoId}?controls=1`
            },
            course_info: {
                title: response.data.items[0].snippet.title,
                videos_number: response.data.pageInfo.totalResults
            }
        });

        console.log("Selected video ", this.state.selectedVideo);
    };

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        });
    };

    addCourse = authUser => {
        // Save this course in firebase for the user
        //  TODO: PUT MORE INFOO IN THE FIREBASE LIKE TITLE, YOUTUBER, 
        //  ETC PARA NO VOLVER A USAR EL API DE YOUTUBE TANTO
        console.log("Auth user ", authUser);
        this.props.firebase
            .user_course(authUser.uid).push()
            .set({
                playlist_id: this.props.match.params.playlistId,
                progress: 0,
                title: this.state.course_info.title,
                videos_number: this.state.course_info.videos_number,
                saw_videos: [],
                notes: []
            })
            .then(success => {
                console.log("Todo bien");
                console.log(
                    this.props.firebase
                        .user_course(authUser.uid)
                        .once("value", function(snapshot) {
                          snapshot.forEach(childSnapshot=>{
                            console.log(childSnapshot);
                            
                          })
                        })
                );
            })
            .then(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <AuthUserContext.Consumer>
                    {authUser => {
                        return (
                            <div className="player_container_COURSEPLAYER">
                                {/* <h1>VideoPlayer</h1> */}
                                {/* Check if already in user's courses with authUser to not display this */}
                                
                                <button
                                className="button_COURSEPLAYER"
                                    onClick={event => this.addCourse(authUser)}
                                >
                                    Add course
                                </button>
                                <VideoDetails
                                    video={this.state.selectedVideo}
                                    className="player_video_COURSEPLAYER"
                                ></VideoDetails>
                                <VideoList
                                    videos={this.state.videos}
                                    onSelectVideo={this.onVideoSelect}
                                    className="player_list_COURSEPLAYER"
                                ></VideoList>
                            </div>
                        );
                    }}
                </AuthUserContext.Consumer>
            </div>
        );
    }
}

export default withFirebase(CoursePlayer);
