import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const base = !firebase.apps.length
  ? firebase.initializeApp({
      apiKey: "AIzaSyBe-ApxCdBXPUuSnlufIG1T8Ya5WHj8l7U",
      authDomain: "mypatienthackuno1021.firebaseapp.com",
      databaseURL: "https://mypatienthackuno1021-default-rtdb.firebaseio.com",
      projectId: "mypatienthackuno1021",
      storageBucket: "mypatienthackuno1021.appspot.com",
      messagingSenderId: "211899556540",
      appId: "1:211899556540:web:8c57968c9fc59147b326b9",
    })
  : firebase.app();

// setup authentication
export const auth = firebase.auth();

export default firebase;
