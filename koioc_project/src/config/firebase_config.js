import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7wQY2AFh_v30Pckd4JmF_zisub2RFjnc",
    authDomain: "koioc-23ec2.firebaseapp.com",
    databaseURL: "https://koioc-23ec2.firebaseio.com",
    projectId: "koioc-23ec2",
    storageBucket: "koioc-23ec2.appspot.com",
    messagingSenderId: "773022862234",
    appId: "1:773022862234:web:56909564cd166d3fa24823",
    measurementId: "G-7FS0LLCDPJ"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;