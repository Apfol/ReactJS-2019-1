import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../../services/firebase';


const firebaseAppp = firebase.initializeApp(firebaseConfig);

class Login extends Component{
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

const firebaseAppa = firebaseAppp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),    
};
export default withFirebaseAuth({
    providers,
    firebaseAppa,

})(Login);


import * as firebase from 'firebase/app';
import 'firebase/auth';

export const firebass = firebase;
export const firebaseConfig = {
    apiKey: "AIzaSyAJYXwqV8ejubFZkr9dTuSDbuNoAwmyfik",
    authDomain: "curvery.firebaseapp.com",
    databaseURL: "https://curvery.firebaseio.com",
    projectId: "curvery",
    storageBucket: "curvery.appspot.com",
    messagingSenderId: "132343440845",
    appId: "1:132343440845:web:5450a3d292a2bd55219084",
    measurementId: "G-B3D3P8Q5V7"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;