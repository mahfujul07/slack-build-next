import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBAUmZtylTmztcyegO-zUQJwZZuTdnAZqM",
//   authDomain: "chat-app-mahfuz.firebaseapp.com",
//   databaseURL: "https://chat-app-mahfuz-default-rtdb.firebaseio.com",
//   projectId: "chat-app-mahfuz",
//   storageBucket: "chat-app-mahfuz.appspot.com",
//   messagingSenderId: "321103549997",
//   appId: "1:321103549997:web:d34659faa5be7b2c20caa4",
//   measurementId: "G-439HX5ZSEB",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCSbvB1hUEshKLQcAJk5Shk9YBCNIt2nzc",
  authDomain: "slack-social-media.firebaseapp.com",
  projectId: "slack-social-media",
  storageBucket: "slack-social-media.appspot.com",
  messagingSenderId: "990926155109",
  appId: "1:990926155109:web:c7f1796167848d91b0058c",
  measurementId: "G-WRP8TFXYC3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
// const analytics = getAnalytics(app);

export { app, auth, db, provider };
