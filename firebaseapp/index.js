// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'apiKey',
  databaseURL: 'https://wheretoeat-ca57a.firebaseio.com',
  authDomain: 'wheretoeat-ca57a.firebaseapp.com',
  storageBucket: 'wheretoeat-ca57a.appspot.com'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
