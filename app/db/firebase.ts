import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDOv54BnXLbYoaCdho1VeWOdjyo4agFS1E',
  authDomain: 'fir-start-69101.firebaseapp.com',
  databaseURL: 'https://fir-start-69101-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-start-69101',
  storageBucket: 'fir-start-69101.firebasestorage.app',
  messagingSenderId: '372480037741',
  appId: '1:372480037741:web:2707b2b6fe471dce524064',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const database = {
  db,
}
