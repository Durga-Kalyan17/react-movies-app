import React from "react";
import './bookingpage.css';
import { Link } from "react-router-dom";


function BNavBar() {

    const linkStyle = {
        textDecoration: 'none' // Apply the text-decoration style directly
    };

    return (
        <div className="nav">
            <div className="nav-bar">
                <h1>
                    Booking Page
                </h1>
                <span>
                    <Link to="/" style={linkStyle} >
                        <button className="nav_button_back">
                            Back
                        </button>
                    </Link>
                </span>
            </div>
            <span>

                <Link to="/" style={linkStyle}>
                    <button className="nav_button_home">
                        Home
                    </button>
                </Link>

            </span>
        </div>

    );
}

export default BNavBar;