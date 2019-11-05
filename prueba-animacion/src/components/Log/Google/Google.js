import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import {providers} from '../../../services/firebase';


class Google extends Component{
    render(){
        const {user, signOut, signInWithGoogle} = this.props;
        return(
            <div>
            {
                user ? 
                <p>HELLO, {user.displayName}</p>
                :
                <p>Please, Sign IN</p>
            }
            {
                user ? 
                <button onClick={signOut}>Sign Out</button>
                :
                <button onClick={signInWithGoogle}>Sign In google</button>
            }
            </div>
            )
        }
    
}


export default withFirebaseAuth({
    providers
})(Google);