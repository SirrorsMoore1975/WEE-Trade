
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {

// apiKey: `${process.env.REACT_APP_FB_API_KEY}`,
// authDomain: `${process.env.REACT_APP_FB_AUTH_DOMAIN}`,
// projectId: `${process.env.REACT_APP_FB_PROJECT_ID}`,
// storageBucket: `${process.env.REACT_APP_FB_STORAGE_BUCKET}`,
// messagingSenderId: `${process.env.REACT_APP_FB_MESSAGING_SENDER_ID}`,
// appId: `${process.env.REACT_APP_FB_APP_ID}`

apiKey: "AIzaSyBR09Y888I4HC86ivO09MKkI5Qpb0huIns",
  authDomain: "project-001-wee-trade.firebaseapp.com",
  projectId: "project-001-wee-trade",
  storageBucket: "project-001-wee-trade.appspot.com",
  messagingSenderId: "284590576767",
  appId: "1:284590576767:web:dacea391ab6445f47edb4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);