import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKOFAU5qdk9OE0CBPV-U7pCz-hqoLETKs",
  authDomain: "globestepper-5ed9e.firebaseapp.com",
  databaseURL:
    "https://globestepper-5ed9e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "globestepper-5ed9e",
  storageBucket: "globestepper-5ed9e.appspot.com",
  messagingSenderId: "748756017188",
  appId: "1:748756017188:web:a30f6709c7592960a038b1",
  measurementId: "G-60ZW6YGJ3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
// eslint-disable-next-line import/prefer-default-export
// export const database = getDatabase(app);

export const firestore = getFirestore(app);
