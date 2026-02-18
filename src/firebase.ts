import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCedeC72JxWRoyosWqj-0jRwmHSKKMyLjw",
  authDomain: "spirulina-d75fc.firebaseapp.com",
  databaseURL: "https://spirulina-d75fc-default-rtdb.firebaseio.com",
  projectId: "spirulina-d75fc",
  storageBucket: "spirulina-d75fc.firebasestorage.app",
  messagingSenderId: "911539811472",
  appId: "1:911539811472:web:31439912d7c9b5f05b5415",
};

export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
