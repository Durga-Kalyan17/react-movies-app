import React from "react";

function NavBar(){
    return(
        <div className="buttons">
            <button className="button">
                Latest Movies
            </button>
            <button className="button_middle">
                Upcoming Movies
            </button>
            <button className="button">
                Nearby Events
            </button>
        </div>
    );
}

export default NavBar;