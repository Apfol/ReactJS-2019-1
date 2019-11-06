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

          //GOOGLE
          this.googleProvider = new app.auth.GoogleAuthProvider();
          //FACEBOOK
          this.facebookProvider = new app.auth.FacebookAuthProvider();
          //TWITTER
          this.twitterProvider = new app.auth.TwitterAuthProvider();


      }

      // AUTH API
      //Sign Up
      doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
      //Sign In
      doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
      // GOOGLE SIGN IN
      doSignInWithGoogle = () =>
      this.auth.signInWithPopup(this.googleProvider);
      //FACEBOOK SIGN IN
      doSignInWithFacebook = () =>
      this.auth.signInWithPopup(this.facebookProvider);
      //TWITTER SIGN IN
      doSignInWithTwitter = () =>
      this.auth.signInWithPopup(this.twitterProvider);
      //Sign Out
      doSignOut = () => this.auth.signOut();
      //Password Reset
      doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
      //Password Update
      doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
      //VERIFICACION POR CORREO
      doSendEmailVerification = () =>
      this.auth.currentUser.sendEmailVerification({
      url: "http://localhost:3000",// REDIRECT LINK AFTER VERIFICATION
      });

      // *** Merge Auth and DB User API *** //
  onAuthUserListener = (next, fallback) =>
  this.auth.onAuthStateChanged(authUser => {
    if (authUser) {
      this.user(authUser.uid)
        .once('value')
        .then(snapshot => {
          const dbUser = snapshot.val();
          // default empty roles
          if (!dbUser.roles) {
            dbUser.roles = {};
          }
          // merge auth and db user
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            emailVerified: authUser.emailVerified,
            providerData: authUser.providerData,
            ...dbUser,
          };
          next(authUser);
        });
    } else {
      fallback();
    }
  });

      // *** User API ***
      user = uid => this.db.ref(`users/${uid}`);
      users = () => this.db.ref('users');
  }

  export default Firebase;