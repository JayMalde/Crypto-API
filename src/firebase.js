import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'AIzaSyDRTfZV8sy_ECBPST6H3ojAsEWrE9KBG0M',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'quiz-demo-770e5.firebaseapp.com',
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'quiz-demo-770e5',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'quiz-demo-770e5.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || 317766025418,
  appId: process.env.REACT_APP_FIREBASE_APP_ID || '1:317766025418:web:e58680f3d4693bf6ef7433'
})

export const auth = app.auth()
export default app