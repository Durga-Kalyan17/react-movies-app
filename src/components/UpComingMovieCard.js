import React from "react";
import "./bookingpage.css";
// import { Link } from "react-router-dom";
// import ImageSlider from "./ImageCardSlider";


function UpCpomingMovieCard({ props }) {
    console.log(props);

    const TMDB_IMG_BASE_URL = process.env.REACT_APP_TMDB_IMG_BASE_URL;
    const url = `${TMDB_IMG_BASE_URL}${props.poster_path}`;
    console.log(url);
   
    return (
        <div className="grid-container">
            <div className="uc_card_container">
                <img className="up_card_pic" src={url} alt="pic" />
                <p className="up_card_title"> <strong>Title -</strong> {props.original_title && props.original_title.length > 25
        ? `${props.original_title.substring(0, 25)}...`
        : props.original_title} </p>
            </div>
        </div>

    );
}//{props.original_title}

export default UpCpomingMovieCard;