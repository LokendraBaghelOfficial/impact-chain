import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCR_aSTvGfZrOwzlidfg-9m6U_kYOOKUUY",
    authDomain: "fireblogsyt-8005e.firebaseapp.com",
    projectId: "fireblogsyt-8005e",
    storageBucket: "fireblogsyt-8005e.appspot.com",
    messagingSenderId: "320990808275",
    appId: "1:320990808275:web:7cdadd010da9db4762ec26"
};
  

const firebaseApp = firebase.initalizeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore();