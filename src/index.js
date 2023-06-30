import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import reportWebVitals from './reportWebVitals'
import App from './App';





const firebaseConfig = {

  apiKey: "AIzaSyDoeyMyw80DIoQjRxVYOmeE_zmQwDpP3lg",

  authDomain: "nordic-e6c92.firebaseapp.com",

  projectId: "nordic-e6c92",

  storageBucket: "nordic-e6c92.appspot.com",

  messagingSenderId: "28416625681",

  appId: "1:28416625681:web:a100af8c779690727775b0"

};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
   
);

reportWebVitals();
