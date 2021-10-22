import React from "react";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
const Chats = () => {
     const { user } = useAuth();
     const history = useHistory();
     const [loading, setLoading] = useState(true);

     const handleLogout = async () => {
          await auth.signOut();
          history.push("/");
     };
     const getFile = async (url) => {
          const response = await fetch(url);
          const data = await response.blob();
          return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
     };
     useEffect(() => {
          if (!user) {
               history.push("/");
               return;
          }
          axios.get("https://api.chatengine.io/users/me", {
               headers: {
                    "project-id": "9424d664-2c45-4775-99a3-a3e6f52cab7a",
                    "user-name": user.email,
                    "user-secret": user.uid,
               },
          })
               .then(() => {
                    setLoading(false);
               })
               .catch(() => {
                    let formdata = new FormData();
                    formdata.append("email", user.email);
                    formdata.append("username", user.email);
                    formdata.append("secret", user.uid);
                    getFile(user.photoURL).then((avatar) => {
                         formdata.append("avatar", avatar, avatar.name);
                         axios.post("https://api.chatengine.io/users", formdata, {
                              headers: {
                                   "private-key":
                                        "eb3696f3-266e-417a-9924-856bbb523838",
                              },
                         })
                              .then(() => setLoading(false))
                              .catch((error) => console.log(error));
                    });
               });
     }, [user, history]);
     if (!user || loading) return "Loading..";

     return (
          <div className="chats-page">
               <div className="nav-bar">
                    <img
                         className="chat__logo"
                         src="https://raw.githubusercontent.com/Rememberlibrary/library/main/assets/img/%E2%80%94Pngtree%E2%80%94blue%20technology%20planet%20cartoon%20illustration_3979254.png"
                    />
                    <div className="logo-tab">Remember</div>
                    <div onClick={() => handleLogout()} className="logout-tab">
                         Đăng xuất
                    </div>
               </div>
               <ChatEngine
                    height="calc(100vh - 66px)"
                    projectID="9424d664-2c45-4775-99a3-a3e6f52cab7a"
                    userName={user.email}
                    userSecret={user.uid}
               />
          </div>
     );
};
export default Chats;
