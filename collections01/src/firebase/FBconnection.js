import firebase from 'firebase'
import 'firebase/firestore'
 
const firebaseConfig = {
    apiKey: "AIzaSyCQKcH9522rfBxW5_JYGjREWIn0MG0Ldbk",
    authDomain: "teste-71524.firebaseapp.com",
    databaseURL: "https://teste-71524.firebaseio.com",
    projectId: "teste-71524",
    storageBucket: "teste-71524.appspot.com",
    messagingSenderId: "333948280461",
    appId: "1:333948280461:web:86d9f42b9b54a3bff14cc4",
    measurementId: "G-3E5E7NJH0T"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const connectionFS = app.firestore()