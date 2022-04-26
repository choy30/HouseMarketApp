// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIXkEBwG_rsseV9KjbEwDafjUL8bt6KOQ',
  authDomain: 'housemarketapp-5261b.firebaseapp.com',
  projectId: 'housemarketapp-5261b',
  storageBucket: 'housemarketapp-5261b.appspot.com',
  messagingSenderId: '679195330496',
  appId: '1:679195330496:web:109393a17aea61debf2a25',
  measurementId: 'G-Y5VWY6XHNK',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
