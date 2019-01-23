import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firestore = firebaseApp.firestore()

const settings = {}

firestore.settings(settings);

export default firestore;