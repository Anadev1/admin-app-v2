import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDwkuWNk-hvOTbPpqlomyIBI7k23rdiixU",
    authDomain: "final-thesis-v2.firebaseapp.com",
    projectId: "final-thesis-v2",
    storageBucket: "final-thesis-v2.appspot.com",
    messagingSenderId: "877096281292",
    appId: "1:877096281292:web:11c47857ce4934b3494e69"
});


const db = firebaseApp.firestore();

export { db };
