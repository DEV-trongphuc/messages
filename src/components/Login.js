import React from "react";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";
const Login = () => {
     return (
          <div id="login-page">
               <div id="login-card">
                    <h2 className="login__title">
                         Chào mừng bạn đến với REMEMBER MESSAGES
                    </h2>
                    <img
                         className="login__logo"
                         src="https://raw.githubusercontent.com/Rememberlibrary/library/main/assets/img/%E2%80%94Pngtree%E2%80%94blue%20technology%20planet%20cartoon%20illustration_3979254.png"
                    />
                    <div
                         onClick={() =>
                              auth.signInWithRedirect(
                                   new firebase.auth.GoogleAuthProvider(),
                              )
                         }
                         className="login-button google"
                    >
                         <GoogleOutlined /> &nbsp; Sign in with Google
                    </div>
                    <br /> <br />
                    <div
                         onClick={() =>
                              auth.signInWithRedirect(
                                   new firebase.auth.FacebookAuthProvider(),
                              )
                         }
                         className="login-button facebook"
                    >
                         <FacebookOutlined /> &nbsp; Sign in with Facebook
                    </div>
               </div>
          </div>
     );
};
export default Login;
