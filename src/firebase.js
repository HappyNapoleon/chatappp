import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    // apiKey: "AIzaSyDogdfZo8_QFkj7LofeQP42S-r9CEci9_c",
    // authDomain: "chatapp-3d1db.firebaseapp.com",
    // projectId: "chatapp-3d1db",
    // storageBucket: "chatapp-3d1db.appspot.com",
    // messagingSenderId: "283420372762",
    // appId: "1:283420372762:web:18ca69eecff108bdd0c6a3",
    // measurementId: "G-HC6JW1XSMW",

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