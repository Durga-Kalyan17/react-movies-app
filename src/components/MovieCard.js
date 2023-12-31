import React from "react";
import { Link } from "react-router-dom";
// import ImageSlider from "./ImageCardSlider";


function MovieCard({ props }) {
    console.log(props);

    return (
        <div className="card_container">
            <p className="card-title">
                {props.Title.length > 12
                    ? `${props.Title.substring(0, 12)}...`
                    : props.Title}
            </p>

            <img className="card-pic" src={props.Poster} alt="pic" />
            {/* <ImageSlider images={[props.Poster]} /> */}
            {/* <button className="card_button"> */}
            <Link to={`/booking-page/${props.imdbID}`} className="card-link">
                <button className="card_button">
                    Book
                </button>
            </Link>
            {/* </button> */}
        </div>
    );
}

export default MovieCard;