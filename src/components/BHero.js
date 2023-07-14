import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import './bookingpage.css';


function BHero() {

    const { id } = useParams();
    const [movie, setMovie] = useState("");

    const OMDB_URL = process.env.REACT_APP_OMDB_URL
    const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

    useEffect(() => {
        const fetchMovieData = async () => {
            const movieResponse = await fetch(`${OMDB_URL}/?i=${id}&apikey=${OMDB_KEY}`);
            const movieData = await movieResponse.json();
            console.log(movieData);
            setMovie(movieData)
        };
        fetchMovieData();
    })

    if (!movie) {
        return <div>Loading...</div>; // Add a loading state while fetching the movie data
    }

    const linkStyle = {
        textDecoration: 'none' // Apply the text-decoration style directly
    };

    return (
        <>
            <span className="hero">
                <img src={movie.Poster} alt="poster"></img>

                <div className="details">
                    <div className="name-date">
                        <h3>
                            Movie name : {movie.Title}
                        </h3>
                        <h3>
                            Release date : {movie.Released}
                        </h3>
                    </div>
                    <div className="time-duration">
                        <h3>
                            Movie duration : {movie.Runtime}
                        </h3>
                        <h3>
                            Ratings : {movie.imdbRating}
                        </h3>
                    </div>
                </div>
            </span>
            <Link to={`/booking-confirm-page/${id}`} style={linkStyle}>
                <button className="book_button">
                    Book now
                </button>
            </Link>
        </>
    );
}

export default BHero;