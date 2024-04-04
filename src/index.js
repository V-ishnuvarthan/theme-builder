// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4WKLyzuexD0Spqj4_P6Ao7mWgBXiudwM',
  authDomain: 'dreamhacks-c55fb.firebaseapp.com',
  projectId: 'dreamhacks-c55fb',
  storageBucket: 'dreamhacks-c55fb.appspot.com',
  messagingSenderId: '410969191725',
  appId: '1:410969191725:web:5f82942da170bd07294fa4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export { db };

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
