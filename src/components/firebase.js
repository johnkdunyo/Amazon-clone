// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyDgCeVHkxHrKgQEsEezrJiaOb1FNA3XrBc",
    authDomain: "project-38beb.firebaseapp.com",
    projectId: "project-38beb",
    storageBucket: "project-38beb.appspot.com",
    messagingSenderId: "296036174286",
    appId: "1:296036174286:web:c83ae77dfaafa1aa1a439f",
    measurementId: "G-L6FYYWLFHY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };