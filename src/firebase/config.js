import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAB41-LY21P4yQ9c3Y7BeJhsLWkDgIkns8",
    authDomain: "invoice-maker-62fda.firebaseapp.com",
    projectId: "invoice-maker-62fda",
    storageBucket: "invoice-maker-62fda.appspot.com",
    messagingSenderId: "1029659539038",
    appId: "1:1029659539038:web:a48d6987f6ac4837a4e6cf"
};
let app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, timestamp };
