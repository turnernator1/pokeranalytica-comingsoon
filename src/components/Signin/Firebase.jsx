 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTWGMYzqECqemQUas0F9Utf6F0yRGJC6w",
    authDomain: "gto-explorer.firebaseapp.com",
    projectId: "gto-explorer",
    storageBucket: "gto-explorer.appspot.com",
    messagingSenderId: "993176536184",
    appId: "1:993176536184:web:3fb5b48461d80d9829d98d",
    measurementId: "G-S2N4EJX9YF"
  };
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);
export default db;

