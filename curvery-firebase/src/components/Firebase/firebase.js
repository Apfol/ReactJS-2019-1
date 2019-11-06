import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';
 // CONFIG DE EL PROYECTO ORIGINAL
// const firebaseConfig = {
//     apiKey: "AIzaSyAJYXwqV8ejubFZkr9dTuSDbuNoAwmyfik",
//     authDomain: "curvery.firebaseapp.com",
//     databaseURL: "https://curvery.firebaseio.com",
//     projectId: "curvery",
//     storageBucket: "curvery.appspot.com",
//     messagingSenderId: "132343440845",
//     appId: "1:132343440845:web:5450a3d292a2bd55219084",
//     measurementId: "G-B3D3P8Q5V7"
//   };


// CONFIG PROYECTO PRUEBA
const firebaseConfig = {
    apiKey: "AIzaSyAD4ItQJ4-yyx-6wNcGNsdq2Zo6asnqYL8",
    authDomain: "curvery-team.firebaseapp.com",
    databaseURL: "https://curvery-team.firebaseio.com",
    projectId: "curvery-team",
    storageBucket: "curvery-team.appspot.com",
    messagingSenderId: "389294509055",
    appId: "1:389294509055:web:926c1f7badb5769b6635ca",
    measurementId: "G-PLT3L94B5Q"
  };
  
  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);
          this.auth = app.auth();
          this.db = app.database();

      }

      // AUTH API
      //Sign Up
      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
      //Sign In
      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
      //Sign Out
      doSignOut = () => this.auth.signOut();
      //Password Reset
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
      //Password Update
      doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
      // *** User API ***
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');
  }

  export default Firebase;