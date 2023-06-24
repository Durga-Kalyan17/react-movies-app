import React from "react";
import './bookingpage.css';
import { Link } from "react-router-dom";


function BNavBar() {
    return (
        <div className="nav">
            <div className="nav-bar">
                <h1>
                    Booking Page
                </h1>
                <span>
                    <Link to="/" className="nav_button_back">Back</Link>
                </span>
            </div>
            <span>
                <Link to="/" className="nav_button_home">Home</Link>
            </span>
        </div>

    );
}

export default BNavBar;