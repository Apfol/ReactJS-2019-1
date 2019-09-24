import React from 'react';
import './App.css';
import axios from 'axios'
import Post from './Post'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      postInfo : {
        userName:"",
        imageProfileLink:"",
        imageURL:"",
        likes:"",
        description:""
      }
    };
  }

  componentDidMount(){

    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=55827771.10f812f.e6e8ec7f30ba4a90a76045d8b116bd53')
    .then(response => {      
      console.log(response);
      const post = response.data.data.map(posts =>{
        return {
          userName: posts.user.username,
          imageProfileLink:  posts.user.profile_picture,
          imageURL: posts.images.standard_resolution.url,
          likes:posts.likes.count,
          description: posts.caption.text
        }        
      });
      this.setState(this.postInfo.post = post);
      console.log(post);
  });
}

postInfo = {
  post:[]
}

  render(){
    return (
      this.postInfo.post.map(
        posting => <Post
                    imageProfile={posting.imageProfileLink}
                    username={posting.userName}
                    image={posting.imageURL}
                    likes={posting.likes}
                    caption={posting.description}/>
      )
    )
  }
}

export default App;
