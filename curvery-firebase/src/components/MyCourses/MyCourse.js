import React, { Component } from "react";
import "./MyCourse.css";
import YoutubeApiAxios from '../../services/YoutubeApiAxios';
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";
class MyCourse extends Component {
    state = {
        my_courses: [],
        playlists: []
    };

    componentWillMount() {
      const authUserId = JSON.parse(localStorage.getItem("authUser")).uid;
      this.getUserCoursesList(authUserId);
      this.loadPlaylist();

    }

    
    getUserCoursesList = authUserId => {
        this.props.firebase.user_course(authUserId).on("value", snapshot => {
            // Firebase retorna un snapshot que es un objeto donde se encapsula
            const coursesObject = snapshot.val();
            if (coursesObject != null) {
                const coursesList = Object.keys(coursesObject).map(key => ({
                    ...coursesObject[key],
                    cid: key
                }));
                console.log("cursos list", coursesList);

                this.setState({
                    my_courses: coursesList
                });
            }
        });
    }
    loadPlaylist = async () => {
        const response = await YoutubeApiAxios.get("playlistItems", {
            params: {
                ...YoutubeApiAxios.defaults.params,
                part: "snippet",
                maxResults: 50,
                playlistId: `${this.state.my_courses.playlist_id}`
            }
        });
        const someArray = response.data.items;
        this.setState({

            playlists: someArray

        });
    };

    renderCards = courses => {
        // TODO: GET MORE INFO FROM FIREBASE
        return this.state.playlists.map(course => (
          <main className="grid_MYCOURSE">
                    <article className="article_MYCOURSE">
                        <img
                            className="img_MYCOURSE"
                            src="https://i.ytimg.com/vi/bG53Pw17tog/hqdefault.jpg"
                            alt=""
                        ></img>
                        <div className="text_MYCOURSE">
                            <h3 className="title_MYCOURSE">{course.title}</h3>
                            <p className="paragraph_MYCOURSE">
                                Collaboratively administrate empowered markets
                                via plug-and-play networks. Collaboratively
                                administrate empowered markets via plug-and-play
                                networks. Collaboratively administrate empowered
                                markets via plug-and-play networks.
                            </p>
                            <button className="button_MYCOURSE">
                                I want to see more
                            </button>
                        </div>
                    </article>
                </main>
        ));
    };

    render() {
        return <div>{this.renderCards(this.state.my_courses)}</div>;
    }
}
export default withFirebase(MyCourse);

/* CARD */
/* 
<main className="grid_MYCOURSE">
                    <article className="article_MYCOURSE">
                        <img
                            className="img_MYCOURSE"
                            src="https://i.ytimg.com/vi/bG53Pw17tog/hqdefault.jpg"
                            alt=""
                        ></img>
                        <div className="text_MYCOURSE">
                            <h3 className="title_MYCOURSE">{course.title}</h3>
                            <p className="paragraph_MYCOURSE">
                                Collaboratively administrate empowered markets
                                via plug-and-play networks. Collaboratively
                                administrate empowered markets via plug-and-play
                                networks. Collaboratively administrate empowered
                                markets via plug-and-play networks.
                            </p>
                            <button className="button_MYCOURSE">
                                I want to see more
                            </button>
                        </div>
                    </article>
                </main>
*/
