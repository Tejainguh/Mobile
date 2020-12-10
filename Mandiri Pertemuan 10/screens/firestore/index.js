import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAXL8D2PevPkJZHK6C2_eD372dRHzn0y8o",
    authDomain: "xd-app-59614.firebaseapp.com",
    projectId: "xd-app-59614",
    storageBucket: "xd-app-59614.appspot.com",
    messagingSenderId: "567186243930",
    appId: "1:567186243930:web:8e4d82300a0ad9d558f363",
    measurementId: "G-T13RHBG75Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore()
  export default{
      firebase, db
  }