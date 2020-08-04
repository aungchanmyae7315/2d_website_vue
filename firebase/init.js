import firebase from 'firebase/app'
// eslint-disable-next-line
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    // apiKey: "AIzaSyAB68oFV-y8B6MpiKNxk8ZltYBVSyeCLTo",
    // authDomain: "live-chat-2a898.firebaseapp.com",
    // databaseURL: "https://live-chat-2a898.firebaseio.com",
    // projectId: "live-chat-2a898",
    // storageBucket: "",
    // messagingSenderId: "210195279064",
    // appId: "1:210195279064:web:7505c54c593bfa8a5ebbad",
    // measurementId: "G-STH32BBB9N"
    // apiKey: "AIzaSyDPiUYvMCnue1JkoiIbKkFVbtQPcnydQeg",
    // authDomain: "vue-chat-app-859f2.firebaseapp.com",
    // databaseURL: "https://vue-chat-app-859f2.firebaseio.com",
    // projectId: "vue-chat-app-859f2",
    // storageBucket: "vue-chat-app-859f2.appspot.com",
    // messagingSenderId: "826215533799",
    // appId: "1:826215533799:web:a315a60f9c690ea538e642",
    // measurementId: "G-Q1FD2V5888"
    apiKey: "AIzaSyDPiUYvMCnue1JkoiIbKkFVbtQPcnydQeg",
  authDomain: "vue-chat-app-859f2.firebaseapp.com",
  databaseURL: "https://vue-chat-app-859f2.firebaseio.com",
  projectId: "vue-chat-app-859f2",
  storageBucket: "vue-chat-app-859f2.appspot.com",
  messagingSenderId: "826215533799",
  appId: "1:826215533799:web:a315a60f9c690ea538e642",
  measurementId: "G-Q1FD2V5888"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()