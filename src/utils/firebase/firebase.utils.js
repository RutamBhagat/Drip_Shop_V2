import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBMPdrNYxbfHK8VmkxWZXl0K9XlE6dso5Y",

  authDomain: "drip-shop-db.firebaseapp.com",

  projectId: "drip-shop-db",

  storageBucket: "drip-shop-db.appspot.com",

  messagingSenderId: "625756517139",

  appId: "1:625756517139:web:4fd6eff37282bf17a5a0e6",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
