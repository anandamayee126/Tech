// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDEN1KQeUMaHuH0T4Tt2dFqneNhhNm7uAs",
    authDomain: "todo-app-d1974.firebaseapp.com",
    projectId: "todo-app-d1974",
    storageBucket: "todo-app-d1974.appspot.com",
    messagingSenderId: "396699322161",
    appId: "1:396699322161:web:865966f55904d0e9fcd210",
    measurementId: "G-4EEPS0L1N2"
});

const db=firebaseApp.firestore()
export  {db};
