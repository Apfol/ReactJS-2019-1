import React, {Component} from 'react';
import Profile from './../Components/Profile/Profile';
import axios from 'axios';
import classes from './ProfileWrapper.css'

class ProfileWrapper extends Component{
    state = {
        picture: '',
        name: '',
        username: '',
        email: '',
        phone: '',
        post: [],
        loading: true
    }

    render(){
        if(this.state.loading){
            return(
                <h3>Profile loading...</h3>
            )
        } else {
            return(
                <div>
                    {this.renderProfile()}
                </div>
            );
        }
    }

    componentDidMount(){
        {/*Profile Image*/}
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response =>{
                this.setState({
                    picture: response.data[0].url
                });
            })
            .catch(error => {
                console.log('Error: ' + error);
            })

        {/*Profile data*/}
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                let dude = response.data[5];

                this.setState({
                    name: dude.name,
                    username: dude.username,
                    email: dude.email,
                    phone: dude.phone
                })
            })
            .catch(error =>{
                console.log('Error: ' + error);
            })
        {/*Posts*/}
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                let posts = response.data.slice(0,9);
                let tempArray = [...this.state.post];

                posts = posts.map(post =>{
                    tempArray.push(post)
                })

                this.setState({
                    post: tempArray,
                    loading: false
                })
                console.log(this.state.post);
            })
            .catch(error =>{
                console.log('Error: ' + error);
            })
    }

    renderProfile(){
        let bla = this.state;

        return(
            <Profile url={bla.picture} name={bla.name}
                username={bla.username} email={bla.email}
                phone={bla.phone} posts={bla.post}></Profile>
        )
    }
    state = {
        picture: '',
        name: '',
        username: '',
        email: '',
        phone: '',
        post: [],
        loading: true
    }
}

export default ProfileWrapper;