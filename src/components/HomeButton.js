import React from "react";
import { Link } from "react-router-dom";


function HomeButton() {

    return (
        <span>
            <Link to="/" >
                <button className="nav_button_home">
                    Home
                </button>
            </Link>
        </span>
    );
}

export default HomeButton;