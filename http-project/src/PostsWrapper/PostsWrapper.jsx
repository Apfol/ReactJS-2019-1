import React, {Component} from 'react';
import Posts from './../Components/Posts/Posts';
import Axios from 'axios';
import classes from './PostsWrapper.css';

class PostsWrapper extends Component{
    state = {
        name: [],
        title: [],
        post: [],
        loading: true
    }

    render(){
        if(this.state.loading){
            return(
                <div>
                    <h3>Loading posts...</h3>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>This is posts</h1>
                    <div className={classes.posts}>                        
                        {this.state.post.map((post,postIndex) => this.renderPost(postIndex))}
                    </div>
                </div>
            )
        }
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                let posts = response.data.slice(0,10);
                let tempArrayP = [...this.state.post];
                let tempArrayT = [...this.state.title]

                posts = posts.map(post =>{
                    tempArrayP.push(post.body);
                    tempArrayT.push(post.title);
                })

                this.setState({
                    post: tempArrayP,
                    title: tempArrayT
                });
            })
            .catch(error =>{
                console.log('Error: ' + error);
            });

        Axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response =>{
                    let names = response.data;
                    let tempArray = [...this.state.name];

                    names = names.map(name =>{
                        tempArray.push(name.name);
                    })

                    this.setState({
                        name: tempArray,
                        loading: false
                    });

                    console.log(this.state.name);
                })
                .catch(error => {
                    console.log('Error: ' + error)
                })
                
    }

    renderPost(postIndex){
        return(
            <Posts key={postIndex} title={this.state.title[postIndex]} content={this.state.post[postIndex]}
                author={this.state.name[postIndex]} index={postIndex}></Posts>
        );
    }
 }


export default PostsWrapper;