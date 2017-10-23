// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'apiKey',
  databaseURL: 'https://profitoro-zayas.firebaseio.com',
  authDomain: 'profitoro-zayas.firebaseapp.com',
  storageBucket: 'gs://profitoro-zayas.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
