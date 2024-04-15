
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQlVG2LI-rtCXg9wiys83VJj1mliGmOcU",
  authDomain: "real-estate-1cb13.firebaseapp.com",
  projectId: "real-estate-1cb13",
  storageBucket: "real-estate-1cb13.appspot.com",
  messagingSenderId: "871595212492",
  appId: "1:871595212492:web:904282b3c74d2400fccc69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;