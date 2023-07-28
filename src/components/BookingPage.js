import React from "react";
import BNavBar from "./BNavBar";
import BHero from "./BHero";
import './bookingpage.css';


function BookingPage() {

    const path = window.location.href.includes(undefined);

    if(path){
        console.log(`Movie Not Found because "IMDB_ID" is undefined`);
    }

    return (
        <>
            <BNavBar />
            {
                path ? <h1 style={
                    {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "red",
                        fontSize: "100px",
                        marginTop: "40vh"                     
                    }
                }>No Movie Found!!!</h1>
                : <BHero />
            }
            
        </>
    );
}

export default BookingPage;