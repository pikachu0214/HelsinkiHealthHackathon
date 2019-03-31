import * as firebase from 'firebase/app';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCjVNiomERkX3MrbTF2Q5TgmVbzVfZgpSs",
  authDomain: "moodbeats-39a35.firebaseapp.com",
  databaseURL: "https://moodbeats-39a35.firebaseio.com",
  projectId: "moodbeats-39a35",
  storageBucket: "moodbeats-39a35.appspot.com",
  messagingSenderId: "333964220384"
};
firebase.initializeApp(config);
export default firebase;

