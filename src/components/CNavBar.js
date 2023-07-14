import React from "react";
import './TicketConfirmPage.css';
import { Link, useParams } from "react-router-dom";


function CNavBar() {

    const {id} = useParams();

    const linkStyle = {
        textDecoration: 'none' // Apply the text-decoration style directly
    };

    return (
        <div className="cnav">
            <div className="cnav-bar">
                <h1>
                    Booking Confirm Page
                </h1>
                <span>
                    <button className="cnav_button_back">
                        <Link to={`/booking-page/${id}`} style={linkStyle}>
                            <p>
                                Back
                            </p>
                        </Link>
                    </button>
                </span>
            </div>
            <span>
                <button className="cnav_button_home">
                    <Link to="/" style={linkStyle}>
                        <p>
                            Home
                        </p>
                    </Link>
                </button>
            </span>
        </div>

    );
}

export default CNavBar;