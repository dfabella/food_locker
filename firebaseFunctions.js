function lockLocker() {
  window.alert("Working!");
}

// Import the functions you need from the SDKs you need

import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJOyWu0ymo4_ND2Rbj-M4FsG6gkMy9yjA",
  authDomain: "food-fa3c4.firebaseapp.com",
  databaseURL: "https://food-fa3c4-default-rtdb.firebaseio.com",
  projectId: "food-fa3c4",
  storageBucket: "food-fa3c4.appspot.com",
  messagingSenderId: "247180250798",
  appId: "1:247180250798:web:112112f7163050f0f4273f",
  measurementId: "G-KKEWPYCSCZ"
};

// Initialize Firebase

const database = getDatabase();


// function lockLocker() {
//     window.alert("Working!");
//     firebase.database().ref('arduino/').set({
//       lock_open: 0
//     });
// }

function unlockLocker() {
  window.alert("Working!");
  firebase.database().ref('arduino/').set({
    lock_open: 1
  });
} 