import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDcGjYDgqP66QRsO8zIDMvtqL2Fo-VBr-s",
    authDomain: "countryclubapp-800ba.firebaseapp.com",
    databaseURL: "https://countryclubapp-800ba.firebaseio.com",
    projectId: "countryclubapp-800ba",
    storageBucket: "countryclubapp-800ba.appspot.com",
    messagingSenderId: "812422239978",
    appId: "1:812422239978:web:e48edffc43f1df67eee993",
    measurementId: "G-78BRX26G7N"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
