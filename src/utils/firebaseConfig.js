// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyARerBErPQw_olwnROkHAnaPv65230XljQ',
  authDomain: 'reactjs-ecommerce-sorren-c9c9b.firebaseapp.com',
  projectId: 'reactjs-ecommerce-sorren-c9c9b',
  storageBucket: 'reactjs-ecommerce-sorren-c9c9b.appspot.com',
  messagingSenderId: '437799094682',
  appId: '1:437799094682:web:632451ed3d644719f3d223'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
