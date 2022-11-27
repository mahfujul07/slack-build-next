import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSbvB1hUEshKLQcAJk5Shk9YBCNIt2nzc",
  authDomain: "slack-social-media.firebaseapp.com",
  projectId: "slack-social-media",
  storageBucket: "slack-social-media.appspot.com",
  messagingSenderId: "990926155109",
  appId: "1:990926155109:web:c7f1796167848d91b0058c",
  measurementId: "G-WRP8TFXYC3",
};

firebase.initializeApp(firebaseConfig);

const db = firestore();
const auth = auth();
const provider = new auth.GoogleAuthProvider();

export { auth, provider, db };
