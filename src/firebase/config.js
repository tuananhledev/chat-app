import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/analytics"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmH_2TCYEhQcgMLDj8BaxmAOJ9PzXo60E",
    authDomain: "chat-web-f48d7.firebaseapp.com",
    projectId: "chat-web-f48d7",
    storageBucket: "chat-web-f48d7.appspot.com",
    messagingSenderId: "155564723388",
    appId: "1:155564723388:web:41ce688248168ce48514b9",
    measurementId: "G-Q3494X6JT9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
