import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBbBViI7dfJdGA9zn5oCMP2CFs5FJJWdc",
  authDomain: "signal-app-clone-b6a35.firebaseapp.com",
  projectId: "signal-app-clone-b6a35",
  storageBucket: "signal-app-clone-b6a35.appspot.com",
  messagingSenderId: "1023287164355",
  appId: "1:1023287164355:web:c754336169b6456fca5176",
  measurementId: "G-5P9E0LDG64",
};

var app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
