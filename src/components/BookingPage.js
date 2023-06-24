import React from "react";
import BNavBar from "./BNavBar";
import BHero from "./BHero";
import './bookingpage.css';



function BookingPage(){
    return(
        <>
            <BNavBar />
            <BHero />
            <div>
                <button className="book_button">
                    Book now
                </button>
            </div>
        </>
    );
}

export default BookingPage;