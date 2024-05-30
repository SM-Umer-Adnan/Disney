import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC0B8HmevHN3aYmQE0Rc9FOwhQUmBtYjKU",
    authDomain: "disneyplus-clone-9280f.firebaseapp.com",
    projectId: "disneyplus-clone-9280f",
    storageBucket: "disneyplus-clone-9280f.appspot.com",
    messagingSenderId: "774699895911",
    appId: "1:774699895911:web:7740793d84474f023898c2",
    measurementId: "G-JGPV86KMZX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
