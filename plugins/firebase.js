import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTHyRgib84rNyg68yYyLhZcNasK0ubkA",
  authDomain: "nuxt-firebase-app-97f86.firebaseapp.com",
  projectId: "nuxt-firebase-app-97f86",
  storageBucket: "nuxt-firebase-app-97f86.appspot.com",
  messagingSenderId: "371275691297",
  appId: "1:371275691297:web:dd06a392ff332d4dcf3a60"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig): ''


//admin super
//user admin
//editor customer

/*//create 3 pages
// registered admin,
email, password, submit button

registered customer
email, password, submit

login page


 */




