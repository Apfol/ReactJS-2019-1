import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Profile.css';

import * as actionCreators from '../../store/actions/';

import Button from '../../components/Button/Button';
import Posts from '../../components/Posts/Posts';
import NewPost from '../../components/NewPost/NewPost';
import Spinner from '../../components/Spinner/Spinner';

class Profile extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        posts: this.props.posts,
        newPostInfo: {
            title: "",
            author: "",
            content: ""
        },
        user: this.props.userLoggedIn
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            user: nextState.user,
            isUserLoggedIn: nextState.isUserLoggedIn,
            posts: nextState.posts,
        });
    }

    componentDidMount() {
        if (this.state.isUserLoggedIn) {
            this.props.onFetchPosts();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchPosts();
        }
    }
    onUserLoggedIn() {
        if (this.props.userLoggedIn) {
            return (
                <div>
                    <div className={classes.profback}>
                        <img className={classes.profilepic} src={this.props.userLoggedIn.profilePic} alt={"profile pic"} />
                        <p>Logged in as: {this.props.userLoggedIn.email}</p>
                        <NewPost
                            newPostInfo={this.state.newPostInfo}
                            updateNewPostData={this.updateNewPostData}
                            submitNewPost={this.submitNewPost}
                        />

                        {this.renderPosts()}
                    </div>
                </div>
            );
        } else {
            return <Spinner />
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.profback}>
                    <h1>
                        Welcome: {this.props.userLoggedIn.username} <br />
                    </h1>
                </div>
                {this.state.isUserLoggedIn ? this.onUserLoggedIn() : this.onUserLoggedOut()}
            </React.Fragment>
        );
    }

    renderPosts() {
        let posts = <Posts posts={this.state.posts} />;

        if (this.props.loadingPosts) {
            posts = <Spinner />;
        }
        return posts;
    }

    updateNewPostData = (event, type) => {
        var updatedNewPostInfo = {
            ...this.state.newPostInfo
        }
        updatedNewPostInfo[type] = event.target.value;
        this.setState({
            newPostInfo: updatedNewPostInfo
        });
    }

    submitNewPost = () => {
        var newPostInfo = { ...this.state.newPostInfo };
        this.props.onSavePost(newPostInfo);
        this.setState({
            newPostInfo: {
                title: "",
                author: "",
                content: ""
            }
        })
    }

    onUserLoggedOut() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to this awesome app!</h1>
                <h2>If you already have an account please Log in</h2>
                <h2>Otherwise please sign up.</h2>
                <div className="home-page__button-section">
                    <Button label="Log in" linkTo='./login' type='primary' />
                    <Button label="Sign in" linkTo='./signin' type='secondary' />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        posts: state.postsStore.posts,
        loadingPosts: state.postsStore.loadingPosts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSavePost: (post) => dispatch(actionCreators.savePost(post)),
        onFetchPosts: () => dispatch(actionCreators.fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);