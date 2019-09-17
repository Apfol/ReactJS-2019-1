import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    newPostInfo: {
      title: "",
      author: "",
      content: ""
    },
    loading: false,
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        var updatedPost = response.data.slice(0, 4);
        updatedPost = updatedPost.map(post => {
          return {
            author: 'Andrés',
            title: post.title.slice(0, 6),
            content: post.body,
          }
        });

        this.setState({
          posts: updatedPost,
          //loading: false,
        });

        console.log(updatedPost);
      })
      .catch(error => {
        console.log('error', error)
      })
      .then(() => {
        this.setState({
          loading: false,
        });
      });
  }

  componentShouldUpdate(nextProps, nextState) {
    return nextState.openPostIndex !== this.state.openPostIndex;
  }

  render() {
    var postToRender = (this.state.loading) ? <h1>Loading...</h1> : <Posts posts={this.state.posts}></Posts>;
    //postToRender = !this.state.loading && this.state.error ? <h1>Error!</h1> : <Posts posts={this.state.posts}></Posts>);
    return (
      <BrowserRouter>
        <header>
          <nav className="nav-bar">
            <ul>
              {/* <li><a href = "/">Home</a></li> */}
              <li><Link to="/">Home</Link></li>
              {/* <li><a href = "/new-post">New Post</a></li> */}
              <li><Link to="/new-post">New Post</Link></li>
            </ul>
          </nav>
        </header>
        <h1 className="main-header">My posts</h1>

        <Route path="/new-post" render={() => (
          <NewPost
            newPostInfo={this.state.newPostInfo}
            updateNewPostData={this.updateNewPostData}
            submitNewPost={this.submitNewPost}
          />
        )} />
        <Route path="/" exact render={() => postToRender} />
        <Route path="/post/:postIndex" exact render={() => (
          <FullPost openPost={(postIndex) => this.openPost(postIndex)} />
        )} />
      </BrowserRouter>
    )
  }

  openPost = (postIndex) => {
    return this.state.posts[postIndex];
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
    var updatedPosts = [...this.state.posts];
    var newPostInfo = { ...this.state.newPostInfo }

    updatedPosts.push(newPostInfo);

    this.setState({
      posts: updatedPosts,
      newPostInfo: {
        title: "",
        author: "",
        content: ""
      }
    })
  }
}

export default App;
