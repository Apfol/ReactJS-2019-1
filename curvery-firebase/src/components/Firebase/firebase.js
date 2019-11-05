import app from 'firebase/app'
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

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);
          this.auth = app.auth();
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
  }

  export default Firebase;