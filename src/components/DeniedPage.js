import React from "react";
import LoginButton from "./LoginButton";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";


function DeniedPage() {

    const { id } = useParams();

    const path = `/booking-page/${id}`;

    return (
        <div className="denied">
            <h2> Access Denied!!! </h2>
            <p> Please login to book a Seat. </p>
            <div className="denied_buttons">
                <BackButton path={path} />
                <LoginButton />
            </div>
        </div>
    );
}

export default DeniedPage;