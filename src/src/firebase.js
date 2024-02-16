import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3pwhMvIdXNyK92Mt2QyUj2_3x2407jmY",
    authDomain: "fireship-demos.firebaseapp.com",
    databaseURL: "https://fireship-demos.firebaseio.com",
    projectId: "fireship-demos",
    storageBucket: "fireship-demos.appspot.com",
    messagingSenderId: "454289704797",
    appId: "1:454289704797:web:c8cc62c1d4e70487940ab4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;