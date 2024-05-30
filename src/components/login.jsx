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



  // if we have no user: sign in button
  // if we have a user: show the logout button
  return (
    <div className="googlelogin">

      
    

    </div>
  
   )
};

