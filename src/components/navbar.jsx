import React, { useContext } from "react";
import { useState, useEffect, setTimeout } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Login } from "./login";
import jwt_decode from "jwt-decode"
import "./navbar.css"
import "./../components/login.css"

export const Navbar = () => {
    
   

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/shop"> Shop </Link>
                <Link to="/cart">
                    <ShoppingCart size={32} />
                </Link>
                <Link to="/table">Table</Link>
            </div>

                <div className="logoutbtn">
                <Link className="btn btn-primary" to={"/"} onClick={() => window.location.replace('/')}>Sign Out</Link>
            </div>

        </div>
    );
};
