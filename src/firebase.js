import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYYD9gqYkcdlK5qFP1v5Q7VL5SMehEaqs",
  authDomain: "discord-clone-e91ee.firebaseapp.com",
  projectId: "discord-clone-e91ee",
  storageBucket: "discord-clone-e91ee.appspot.com",
  messagingSenderId: "474366549706",
  appId: "1:474366549706:web:ce656fe17dd272a6755e33"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default db;
