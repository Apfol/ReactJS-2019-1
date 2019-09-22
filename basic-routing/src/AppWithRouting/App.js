import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './App.css';
import axios from 'axios';
class App extends Component {
  state = {
    posts: [],
    newPostInfo: {
      title: "",
      author: "",
      content: "",
      loading: false,
      error:false
    }
  }

  componentDidMount(){
    this.setState({loading:true});
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      let updatedPosts= response.data.slice(0,4);
      updatedPosts=updatedPosts.map(post =>{
        return {
          author: 'Daniel',
          title: post.title.slice(0,6),
          content: post.body
        }
      });
      this.setState({
        posts:updatedPosts
      });
    })
    .catch(this.setState({error:true}))
    .then(this.setState({loading:false})) 
  }
  componentShouldUpdate(nextProps, nextState) {
    return nextState.openPostIndex !== this.state.openPostIndex;
  }

  render () {
    var postget;
    if(this.state.loading){
      postget=<h1>Loading...</h1>;
    }else if(this.state.error){
      postget=<h1>ERROR!!</h1>;
    }
    return(
      <BrowserRouter>
        <div>
          <header>
            
            <nav className = "nav-bar">
              <ul>
                {/* <li><a href = "/">Home</a></li> */}
                <li><Link to="/">Home</Link></li>
                {/* <li><a href = "/new-post">New Post</a></li> */}
                <li><Link to="/new-post">New Post</Link></li>
              </ul>
            </nav>
          </header>
          <h1 className = "main-header">My posts</h1>
          {postget}
          <Route path = "/new-post" render = {() => (
              <NewPost
                  newPostInfo = {this.state.newPostInfo}
                  updateNewPostData = {this.updateNewPostData}
                  submitNewPost = {this.submitNewPost}
              />
          )} />
          <Route path ="/" exact render = {() => <Posts posts = {this.state.posts} />} />
          <Route path ="/post/:postIndex" exact render = {() => (
              <FullPost openPost = {(postIndex) => this.openPost(postIndex)} />
          )} />
        </div>
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
    var newPostInfo = {...this.state.newPostInfo}

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
