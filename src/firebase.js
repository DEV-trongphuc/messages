import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase
     .initializeApp({
          apiKey: "AIzaSyCwgYOVi8NpQAhztQ41OkZI8J9X9rBX3nU",
          authDomain: "rememberchat-c48d8.firebaseapp.com",
          projectId: "rememberchat-c48d8",
          storageBucket: "rememberchat-c48d8.appspot.com",
          messagingSenderId: "1096949919022",
          appId: "1:1096949919022:web:5b2d21bc08833bc8c4debf",
     })
     .auth();
