import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
  apiKey: "AIzaSyAa6b6z0QvLLlAozfUZ9lkhC677xnIElXw",
  authDomain: "mystoremywebapp.firebaseapp.com",
  databaseURL: "https://mystoremywebapp-default-rtdb.firebaseio.com",
  projectId: "mystoremywebapp",
  storageBucket: "mystoremywebapp.appspot.com",
  messagingSenderId: "1023187231737",
  appId: "1:1023187231737:web:453de80f08819e504c9328",
  measurementId: "G-38T7E9VQZV"
};

// Initialize Firebase
firebase.initializeApp(config);
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

export default firebase;