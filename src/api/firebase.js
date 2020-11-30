import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig'
// Add the Firebase services that you want to use
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore()

export default firestore