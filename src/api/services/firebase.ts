import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDtWVtFKcrxBSwiknEI4FSOw6QzoDsiv0g",
    authDomain: "allsirsa.firebaseapp.com",
    databaseURL: "https://allsirsa.firebaseio.com",
    projectId: "allsirsa",
    storageBucket: "allsirsa.appspot.com",
    messagingSenderId: "1025679152502",
    appId: "1:1025679152502:web:27484847fe329a8ed0d657",
}

firebase.initializeApp(config)

export default firebase