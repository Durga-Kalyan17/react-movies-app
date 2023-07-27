import React from "react";
import BNavBar from "./BNavBar";
import CHero from "./CHero";
import TicketCounter from './TicketCounter';
// import './TicketConfirmPage.css';
import { Link, useParams } from "react-router-dom";


function CBookingPage() {

    const { id } = useParams();

    return (
        <>
            <BNavBar />
            <CHero />
            <h2 className="seats">
                Choose Number of Seats
            </h2>
            <div className="footer">
                <TicketCounter />
                <Link to={`/ticket-details/${id}`}>
                    <button className="cbook_button">
                        Confirm Booking
                    </button>
                </Link>
            </div>
        </>
    );
}

export default CBookingPage;