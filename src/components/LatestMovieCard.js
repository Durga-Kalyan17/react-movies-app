import React, { useState, useEffect } from "react";
import "./bookingpage.css";
import { Link } from "react-router-dom";



function LatestMovieCard({ props }) {

    const [movie, setMovie] = useState("");

    const OMDB_URL = process.env.REACT_APP_OMDB_URL;
    const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

    useEffect(() => {
        const fetchMovieData = async () => {
            const movieResponse = await fetch(`${OMDB_URL}/?t=${props.original_title}&apikey=${OMDB_KEY}`);
            const movieData = await movieResponse.json();
            console.log(movieData);
            setMovie(movieData)
        };
        fetchMovieData();
    }, [OMDB_URL, props.original_title, OMDB_KEY])

    if (!movie) {
        return <div>Loading...</div>; // Add a loading state while fetching the movie data
    }

    // console.log(props);

    const TMDB_IMG_BASE_URL = process.env.REACT_APP_TMDB_IMG_BASE_URL;
    const url = `${TMDB_IMG_BASE_URL}${props.poster_path}`;
    console.log(url);

    const linkStyle = {
        textDecoration: 'none' // Apply the text-decoration style directly
    };

    return (
        <div className="uc_card_container">
            <Link to={`/booking-page/${movie.imdbID}`} >
                <img className="up_card_pic" src={url} alt="pic" />
            </Link>
            <Link to={`/booking-page/${movie.imdbID}`} style={linkStyle}>
                <p className="up_card_title"> <strong>Title -</strong>
                    {props.original_title && props.original_title.length > 25
                        ? `${props.original_title.substring(0, 25)}...`
                        : props.original_title} </p>
            </Link>
        </div >
    );
}//{props.original_title}

export default LatestMovieCard;