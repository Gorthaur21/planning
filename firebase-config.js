const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJET",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "1:XXXXXXX:web:XXXXXXXX"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
