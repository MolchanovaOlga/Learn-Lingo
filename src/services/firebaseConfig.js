import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLYZmRLr0imJmnsHgCpdjJpMi6-gqPi90",
  authDomain: "learnlingo-24c98.firebaseapp.com",
  databaseURL: "https://learnlingo-24c98-default-rtdb.firebaseio.com",
  projectId: "learnlingo-24c98",
  storageBucket: "learnlingo-24c98.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
