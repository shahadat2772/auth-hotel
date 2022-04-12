// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4_fFgoLEjeV2mHGrwh8_fyfyYBN1-15A",
  authDomain: "auth-hotel.firebaseapp.com",
  projectId: "auth-hotel",
  storageBucket: "auth-hotel.appspot.com",
  messagingSenderId: "211076698201",
  appId: "1:211076698201:web:ed98c4646177f717a16148",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
