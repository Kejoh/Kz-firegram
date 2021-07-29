import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD5gc89mMTPj-2hpQN5QnYmQVaolo0Ivt0",
    authDomain: "kaz-firegram.firebaseapp.com",
    projectId: "kaz-firegram",
    storageBucket: "kaz-firegram.appspot.com",
    messagingSenderId: "251121726082",
    appId: "1:251121726082:web:3d0023798ad25b1ca13a9b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };