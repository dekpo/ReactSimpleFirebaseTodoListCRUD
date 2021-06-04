import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBFZ9o2MSbZZv0eeig87-b8Q_ODv5WDa7o",
    authDomain: "reacttododb-dekpo.firebaseapp.com",
    databaseURL: "https://reacttododb-dekpo-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reacttododb-dekpo",
    storageBucket: "reacttododb-dekpo.appspot.com",
    messagingSenderId: "551751832541",
    appId: "1:551751832541:web:3997eb15db38f06602dc34"
  }

  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()

  export default firebase