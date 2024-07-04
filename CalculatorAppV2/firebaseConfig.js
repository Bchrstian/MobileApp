// src/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX_rMDZkKpNtfafV-Sei02kzR2ij546-8",
  authDomain: "mobileapp-d3206.firebaseapp.com",
  projectId: "mobileapp-d3206",
  storageBucket: "mobileapp-d3206.appspot.com",
  messagingSenderId: "56955554744",
  appId: "1:56955554744:android:d91e00478e4c12f12ddd4d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
