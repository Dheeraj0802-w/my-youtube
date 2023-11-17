
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPbjfX1oRJ9lxn-fgqH3FxXHXAd9kzpeE",
  authDomain: "my--autz.firebaseapp.com",
  projectId: "my--autz",
  storageBucket: "my--autz.appspot.com",
  messagingSenderId: "642124993439",
  appId: "1:642124993439:web:58869d609ebb53756563aa",
  measurementId: "G-8VFKH34XJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
