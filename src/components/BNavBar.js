import React from "react";
import './bookingpage.css';
import { useParams } from "react-router-dom";
import BNavHeader from "./BNavHeader";
import BackButton from "./BackButton"; 
import HomeButton from "./HomeButton";


export default function BNavBar() {

    const { id } = useParams();  

    const routePaths = ["/", `/booking-page/${id}`, `/booking-confirm-page/${id}`];
    let path = "";

    const currentAddress = window.location.href; // to get current URL
    let header = "";

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
    
    return (
        <div className="nav">
            <BNavHeader header={header} />
            <div className="nav-bar">
                <BackButton path={path} />
                <HomeButton />
            </div>
        </div>
    );
}