import { app } from 'firebase/app';
import * as FirebaseLibrary from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        FirebaseLibrary.initializeApp(config);
        this.auth = FirebaseLibrary.auth();
        this.db = FirebaseLibrary.database();
    }
    user = uid => this.db.ref(`users/${uid}`);
    user_couses = (uid, cid) => this.db.ref(`users/${uid}/${cid}`)
}
export default Firebase;
