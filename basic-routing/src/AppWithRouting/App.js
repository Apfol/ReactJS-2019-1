import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    posts: [],
    newPostInfo: {
      title: "",
      author: "",
      content: ""
    },
    loading: false
  };

  onComponentDidMount() {
    this.setState({
      loading: true
    })
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        let updatedPosts = response.data.slice(0, 4);

        updatedPosts = updatedPosts.map(post => {
          return {
            author: "robinson",
            title: post.title.slice(0, 4),
            content: post.body
          };
        });

        this.setState({
          posts: updatedPosts,
          loading:false
        });
      })
      .catch(error => {
        console.log("An error happened");
        
      })
      .then(()=>{
        this.setState({
          loading:false
        });
      });
  }

  componentShouldUpdate(nextProps, nextState) {
    return nextState.openPostIndex !== this.state.openPostIndex;
  }

  render() {
    
    var postsToRender = (this.state.loading ? <h1>Loading...</h1>: <Posts posts={this.state.posts}></Posts>)
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav className="nav-bar">
              <ul>
                {/* <li><a href = "/">Home</a></li> */}
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/* <li><a href = "/new-post">New Post</a></li> */}
                <li>
                  <Link to="/new-post">New Post</Link>
                </li>
              </ul>
            </nav>
          </header>
          <h1 className="main-header">My posts</h1>

          <Route
            path="/new-post"
            render={() => (
              <NewPost
                newPostInfo={this.state.newPostInfo}
                updateNewPostData={this.updateNewPostData}
                submitNewPost={this.submitNewPost}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={postsToRender}
          />
          <Route
            path="/post/:postIndex"
            exact
            render={() => (
              <FullPost openPost={postIndex => this.openPost(postIndex)} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }

  openPost = postIndex => {
    return this.state.posts[postIndex];
  };

  updateNewPostData = (event, type) => {
    var updatedNewPostInfo = {
      ...this.state.newPostInfo
    };

    updatedNewPostInfo[type] = event.target.value;

    this.setState({
      newPostInfo: updatedNewPostInfo
    });
  };

  submitNewPost = () => {
    var updatedPosts = [...this.state.posts];
    var newPostInfo = { ...this.state.newPostInfo };

    updatedPosts.push(newPostInfo);

    this.setState({
      posts: updatedPosts,
      newPostInfo: {
        title: "",
        author: "",
        content: ""
      }
    });

    axios.post("https://jsonplaceholder.typicode.com/posts", newPostInfo)
    .then((response)=>{
      console.log(response);
      if(response.status == 201){
        console.log('Todo bien prrrooo');
      }
    })
    .catch((error)=>{
      console.log('Ocurrio un error que sad');
    })
    .then(()=>{
      console.log("Se termino todo");
      
    });
  };
}

export default App;
