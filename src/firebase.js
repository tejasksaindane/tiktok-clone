// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCA6E3z3LVJKt48o3h84yba_MWas2sCjDI",
  authDomain: "tiktok-clone-a9dd1.firebaseapp.com",
  projectId: "tiktok-clone-a9dd1",
  storageBucket: "tiktok-clone-a9dd1.appspot.com",
  messagingSenderId: "396177856856",
  appId: "1:396177856856:web:974d0b87cd4a13bba32d2d",
  measurementId: "G-5RVXCS6G7B",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
