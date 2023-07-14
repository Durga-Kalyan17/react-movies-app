import React from "react";
import CNavBar from "./CNavBar";
import CHero from "./CHero";
import TicketCounter from './TicketCounter';
// import './TicketConfirmPage.css';


function CBookingPage(){
    return(
        <>
            <CNavBar />
            <CHero />
            <h2 className="seats">
                  Choose Number of Seats  
            </h2>
            <div className="footer">
                <TicketCounter />
                <button className="cbook_button">
                    Confirm Booking
                </button>
            </div>
        </>
    );
}

export default CBookingPage;