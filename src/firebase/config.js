import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/analytics"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyATVWZ0OY4B_0hFOk0K2fC73JaHYUiaCJk",
    authDomain: "chat-app-5ea6a.firebaseapp.com",
    projectId: "chat-app-5ea6a",
    storageBucket: "chat-app-5ea6a.appspot.com",
    messagingSenderId: "215415449360",
    appId: "1:215415449360:web:6894fa1897b1108e2d2795",
    measurementId: "G-5LFDKN6800",
    databaseURL: 'http://localhost:8080',
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
