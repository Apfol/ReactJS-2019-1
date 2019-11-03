import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
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