import React from "react";
import './bookingpage.css';
import { Link, useParams } from "react-router-dom";


function BNavBar() {

    const { id } = useParams();  

    const routePaths = ["/", `/booking-page/${id}`, `/booking-confirm-page/${id}`];
    let path = "";

    const currentAddress = window.location.href;
    let header = "";

    // <Route path="/upcoming-movies" element={<UpComingMovies />} />
    //     <Route path="/latest-movies" element={<LatestMovies />} />
    //     <Route path="/search-results/:title" element={<SearchResults />} />
    //     <Route path="/booking-page/:id" element={<BookingPage />} />
    //     <Route path="/booking-confirm-page/:id" element={<CBookingPage />} />
    //     <Route path="/denied-page/:id" element={<DeniedPage />} />
    //     <Route path="/ticket-details/:id" element={<TicketDetails />} />

    if(currentAddress.includes("booking-page")){
        header = "Booking Page";
        path = routePaths[0];
    }
    else if(currentAddress.includes("booking-confirm-page")){
        header = "Booking Confirm Page";
        path = routePaths[1];
    }
    else if(currentAddress.includes("ticket-details")){
        header = "Ticket Details";
        path = routePaths[2];
    }
    else if(currentAddress.includes("upcoming-movies")){
        header = "Upcoming Movies";
        path = routePaths[0];
    }
    else if(currentAddress.includes("latest-movies")){
        header = "Latest Movies";
        path = routePaths[0];
    }
        

    const linkStyle = {
        textDecoration: 'none' // Apply the text-decoration style directly
    };

    return (
        <div className="nav">
            <h1>
                {header}
            </h1>
            <div className="nav-bar">
                <span>
                    <Link to={path} style={linkStyle} >
                        <button className="nav_button_back">
                            Back
                        </button>
                    </Link>
                </span>
                <span>
                    <Link to="/" style={linkStyle}>
                        <button className="nav_button_home">
                            Home
                        </button>
                    </Link>
                </span>
            </div>
        </div>

    );
}

export default BNavBar;