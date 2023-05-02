import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7G-QPvVsmm5R0ovmttLwjvf7UnSbgF8s",
  authDomain: "netflix-d0c13.firebaseapp.com",
  projectId: "netflix-d0c13",
  storageBucket: "netflix-d0c13.appspot.com",
  messagingSenderId: "204016335267",
  appId: "1:204016335267:web:8387e5569e7c4bb67cc216",
  measurementId: "G-H7BM4TD935"

  //...
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

