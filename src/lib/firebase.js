import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR_5UMwxKlXa5kmLr6MxSv3JoCxQhM1kE",
  authDomain: "classroom-8b444.firebaseapp.com",
  projectId: "classroom-8b444",
  storageBucket: "classroom-8b444.appspot.com",
  messagingSenderId: "858368239049",
  appId: "1:858368239049:web:7e6978705abab14616b418",
  measurementId: "G-83CZJP47G0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

 