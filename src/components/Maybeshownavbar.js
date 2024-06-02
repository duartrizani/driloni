import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export const MaybeShowNavBar = ({ children }) => {
    

    const location = useLocation();

    const [showNavBar, setShowNavBar] = useState(false)

    useEffect(() => {
        if (location.pathname === '') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location]);


    return (

            <div> {showNavBar && children} </div>
    )
}

export default MaybeShowNavBar