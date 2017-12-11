// Initialize Firebase
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAbhBrk54KaH7yE1hn986TiYLC2sUJtYYU',
  authDomain: 'wheretoeat-ca57a.firebaseapp.com',
  databaseURL: 'https://wheretoeat-ca57a.firebaseio.com',
  projectId: 'wheretoeat-ca57a',
  storageBucket: 'wheretoeat-ca57a.appspot.com',
  messagingSenderId: '343748273017'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
