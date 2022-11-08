// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcb3zxhcDOHip1ES8CnvYeK_U-A6T4fcI",
  authDomain: "awesomely-eating.firebaseapp.com",
  projectId: "awesomely-eating",
  storageBucket: "awesomely-eating.appspot.com",
  messagingSenderId: "900572996240",
  appId: "1:900572996240:web:68e753be21a03bdab0ae15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
