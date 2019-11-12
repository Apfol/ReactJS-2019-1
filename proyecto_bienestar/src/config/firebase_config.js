import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDYO4fQlKsUDsfX_qe5y4JLXCJ4Z7acCx0",
    authDomain: "proyectobienestar-21e23.firebaseapp.com",
    databaseURL: "https://proyectobienestar-21e23.firebaseio.com",
    projectId: "proyectobienestar-21e23",
    storageBucket: "proyectobienestar-21e23.appspot.com",
    messagingSenderId: "817569865202",
    appId: "1:817569865202:web:4581e442dfdb35a2995f6b",
    measurementId: "G-E819VXLGXH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;