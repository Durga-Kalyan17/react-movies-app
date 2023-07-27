import React from "react";
import LoginButton from "./LoginButton";
import { Link, useParams } from "react-router-dom";


function DeniedPage() {

    const { id } = useParams();

    return (
        <div className="denied">
            <h2>
                Access Denied!!!
            </h2>
            <p>
                Please login to book a Seat.
            </p>
            <div className="denied_buttons">
                <Link to={`/booking-page/${id}`}>
                    <button className="nav_button_back">
                        Back
                    </button>
                </Link>
                <LoginButton />
            </div>
        </div>
    );
}

export default DeniedPage;