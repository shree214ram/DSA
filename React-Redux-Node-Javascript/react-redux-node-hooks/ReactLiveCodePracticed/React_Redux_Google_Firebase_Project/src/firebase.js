import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, addDoc, getDoc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
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
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// export {storage};
// export {db};

export default auth;

export {
    app,
    db,
    storage,
    collection,
    addDoc,
    getDoc,
    getDocs,
    query,
    where
    // serverTimestamp, ref, getDownloadURL, uploadString  
};

