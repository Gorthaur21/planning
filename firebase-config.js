const firebaseConfig = {
    apiKey: "AIzaSyAp9f2Cbu0iUojvRH1FdDrGEONg1TQ52wg",
    authDomain: "planning-equipe-573e0.firebaseapp.com",
    projectId: "planning-equipe-573e0",
    storageBucket: "planning-equipe-573e0.firebasestorage.app",
    messagingSenderId: "519775278154",
    appId: "1:519775278154:web:247f93ea37279a7ec782b3"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
