import React, { Component } from 'react';
import './InitialApp.css';

class App extends Component {
  state = {
    posts: [],
    openPostIndex: -1,
    newPostInfo: {
      title: "",
      author: "",
      content: ""
    }
  }

  render () {
    return(
      <div>
        <h1 className = "main-header">My posts</h1>
        {this.state.posts.map((post, postIndex) => this.renderPost(post, postIndex))}
        {this.renderOpenPost()}
        {this.renderNewPostForm()}
      </div>
    )
  }

  renderPost = (post, postIndex) => {
    return (
      <div className = "post" onClick = {this.openFullPost.bind(this, postIndex)}>
        <h2>{post.title}</h2>
        <p>{post.author}</p>
      </div>
    )
  }

  openFullPost = (postIndex) => {
    this.setState({
      openPostIndex: postIndex
    })
  }

  renderOpenPost = () => {
    var openPostIndex = this.state.openPostIndex;
    var openPost;
    var postToRender = null;

    if (openPostIndex >= 0) {
      openPost = this.state.posts[openPostIndex];

      postToRender = (
        <div className = "full-post">
          <h2>{openPost.title}</h2>
          <p>{openPost.content}</p>
          <p className = "author-text">{openPost.author}</p>
        </div>
      )
    }

    return postToRender;
  }

  renderNewPostForm = () => {
    return(
        <table className = "new-post-form">
          <tbody>
            <tr>
              <td>
                <label>Post title</label>
              </td>
              <td>
                <input type="text" value={this.state.newPostInfo["title"]}
                  onChange={(event) => this.updateNewPostData(event, "title")}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Post Author</label>
              </td>
              <td>
                <input type="text" value={this.state.newPostInfo["author"]}
                  onChange = {(event) => this.updateNewPostData(event, 'author')}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Content</label>
              </td>
              <td>
                <textarea type="text" value={this.state.newPostInfo["content"]}
                  onChange = {(event) => this.updateNewPostData(event, 'content')}/>
              </td>
            </tr>
          </tbody>
          <tr>
            <td>
              <button onClick = {this.submitNewPost}>Add new Post</button>
            </td>
          </tr>
        </table>
    )
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
