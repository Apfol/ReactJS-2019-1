import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

// CONFIG PROYECTO PRUEBA

const firebaseconfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseconfig);
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
    doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
    //FACEBOOK SIGN IN
    doSignInWithFacebook = () =>
        this.auth.signInWithPopup(this.facebookProvider);
    //TWITTER SIGN IN
    doSignInWithTwitter = () => this.auth.signInWithPopup(this.twitterProvider);
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
            url: "http://localhost:3000" // REDIRECT LINK AFTER VERIFICATION
        });

    // *** Merge Auth and DB User API *** //
    onAuthUserListener = (next, fallback) =>
        this.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                this.user(authUser.uid)
                    .once("value")
                    .then(snapshot => {
                        const dbUser = snapshot.val();
                        // default empty roles
                        // if (!dbUser.roles) {
                            // dbUser.roles = {};
                        //  }
                        // merge auth and db user
                        authUser = {
                            uid: authUser.uid,
                            email: authUser.email,
                            emailVerified: authUser.emailVerified,
                            providerData: authUser.providerData,
                            ...dbUser
                        };
                        next(authUser);
                    });
            } else {
                fallback();
            }
        });

    // *** User API ***
    //  TODO: delete this 
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref("users");
    
    // TO PUSH 
    user_course = (uid) => this.db.ref(`users/${uid}/courses`);
    user_course_notes = (uid, cid) => this.db.ref(`users/${uid}/courses/${cid}`)

}

export default Firebase;
