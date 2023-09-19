// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase'
import { getFireStore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4rc3qGtdCWd_-2xi8wgH8tyRpY3pLxkg',
  authDomain: 'creative-thoughts-a3245.firebaseapp.com',
  projectId: 'creative-thoughts-a3245',
  storageBucket: 'creative-thoughts-a3245.appspot.com',
  messagingSenderId: '301389741422',
  appId: '1:301389741422:web:a2a61fa23241246529557f',
  measurementId: 'G-729MT3VWZ4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
export const db = getFireStore()
