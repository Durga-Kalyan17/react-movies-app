import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        // <div className="home_nav">
            <div className="buttons">
                <Link to="/latest-movies">
                    <button className="button">
                        Latest Movies
                    </button>
                </Link>
                <Link to="/upcoming-movies">
                    <button className="button">
                        Upcoming Movies
                    </button>
                </Link>
                <button className="button">
                    Nearby Events
                </button>
            </div>
        // </div>
    );
}

export default NavBar;