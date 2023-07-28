import React from "react";
import { Link } from "react-router-dom";


function BackButton({ path }) {

    return (
        <span>
            <Link to={path} >
                <button className="nav_button_back">
                    Back
                </button>
            </Link>
        </span>
    );
}

export default BackButton;