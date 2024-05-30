import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center">
                    <span className="mr-1">
                        {/* Icon for OfferForm */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </span>
                    OfferForm
                </Link>
                <Link to="/shop" className="flex items-center">
                    <span className="mr-1">
                        {/* Icon for Shop */}
                        <ShoppingCart size={24} />
                    </span>
                    Shop
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
