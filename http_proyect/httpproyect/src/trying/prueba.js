import axios from 'axios';
import React, {Component} from 'react';
import Post from './post.js';

class Prueba extends Component{
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('./prueba.json')
            .then(response => {
                var posts = response.data.slice(0,2);
                var updatePosts = posts.map(post => {
                    return {
                        title: post.title.slice(0,10),
                        author: "Yo",
                        content: post.body
                    }
                })
                this.setState({posts: updatePosts})
                console.log(this.state);
            });
    }

    render(){
        return(
            this.state.posts.map(
                post => <Post
                    title = {post.title}
                    author = {post.author}
                    content = {post.content}
                />
            )
        )
    }
}

export default Prueba;





