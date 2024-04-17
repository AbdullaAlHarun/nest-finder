// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbTvOzA0M9ceSwTiyu5OxnSXXSuwlGVwk",
  authDomain: "nest-finder-5e43c.firebaseapp.com",
  projectId: "nest-finder-5e43c",
  storageBucket: "nest-finder-5e43c.appspot.com",
  messagingSenderId: "167958871390",
  appId: "1:167958871390:web:ec4134582bbc8ec82e63cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;