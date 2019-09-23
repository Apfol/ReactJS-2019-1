import React, {Component} from 'react';
import Friends from './../Friends/Friends';
import axios from  'axios';
import classes from './OnlineFriends.css';

class OnlineFriends extends Component{
    state ={
        users: [],
        loading: true
    }

    render(){
        if(this.state.loading){
            return(
                <div className={classes.online}>
                    <h3 className={classes.loading}>Loading friends...</h3>
                </div>
            )
        } else{
            return(
                <div className={classes.online}>
                    <p className={classes.title}>OnlineFriends</p>
                    {this.state.users.map((user, userIndex) => 
                        this.showUsers(user, userIndex))}

                </div>
            )
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                let OnlineUsers = response.data;
                let usersToRender = [...this.state.users];
                

                OnlineUsers = OnlineUsers.map(user => {
                    usersToRender.push(user.name);
                });
               
                this.setState({
                    users: usersToRender,
                    loading: false
                });
                
            })
            .catch(error =>{
                console.log('Error: ' + error);
            })             
    }
    
    showUsers(user, userIndex){
        return(
            <Friends key={userIndex} name={user} index={userIndex}></Friends>
        )
    }


}

export default OnlineFriends; 