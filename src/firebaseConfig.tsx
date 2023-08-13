import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCs_PyMIabQ3Www5VZRrWGjO1AILbPaHdA",
    authDomain: "deeckrite-83017.firebaseapp.com",
    projectId: "deeckrite-83017",
    storageBucket: "deeckrite-83017.appspot.com",
    messagingSenderId: "152769171902",
    appId: "1:152769171902:web:740acefe9706a51acda9ef"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
