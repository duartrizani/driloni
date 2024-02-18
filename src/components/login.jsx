import React, { createContext, useContext } from "react";
import { ReactDOM, useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Shop } from "../pages/shop/shop";
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";


export const Login = (props) => {

  const [user, setUser] = useState({});

  
  

  function handleCallbackResponse(response) {
    console.log("encoded JWT ID Token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "833701621170-ld48p38jak90qoignb6d71h3od8vpsuf.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });


    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);



  // if we have no user: sign in button
  // if we have a user: show the logout button
  return (
    <div className="googlelogin">
      <div id="signInDiv"></div>


      {
        Object.keys(user).length != 0 &&
        <div className="logoutbtn">
       <button onClick={(e) => handleSignOut(e)} className="btn btn-primary">Sign Out</button>
       </div>
      } 

      {
        Object.keys(user).length != 0 &&
        <div>
        <div className="text text-danger">DONT SHARE YOU ACCOUNT!</div>
        <Link to="/shop" className="btn btn-info"> Shop </Link>
        </div>
        
      }


      { user && 
      <div id="showshop">
      </div>
      }

    </div>
  );

  
   
};

