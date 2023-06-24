import React from "react";
// import './bookingpage.css';


function BHero() {
    return (
        <span className="hero">
            <img src="https://cdn.flickeringmyth.com/wp-content/uploads/2022/09/black-adam-9.jpg" alt="poster"></img>

            <div className="details">
                <div className="name-date">
                    <h3>
                        Movie name : DC - Black Adam
                    </h3>
                    <h3>
                        Release date : 22-06-2023
                    </h3>
                </div>
                <div className="time-duration">
                    <h3>
                        Movie duration : 2 hrs
                    </h3>
                    <h3>
                        Ratings : 4.5/5
                    </h3>
                </div>
            </div>
        </span>
    );
}

export default BHero;