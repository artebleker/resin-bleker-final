
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9gc5GDEZk1hmF4IwI9wk8j8u7_e48NGU",
  authDomain: "resin-bleker-final.firebaseapp.com",
  projectId: "resin-bleker-final",
  storageBucket: "resin-bleker-final.appspot.com",
  messagingSenderId: "999499653535",
  appId: "1:999499653535:web:0cf170de4039b115265daa"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db