// import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './bookingpage.css';

function BHero() {

    const { id } = useParams();
    const [movie, setMovie] = useState("");
    // const { isAuthenticated } = useAuth0();

    const OMDB_URL = process.env.REACT_APP_OMDB_URL;
    const OMDB_KEY = process.env.REACT_APP_OMDB_KEY;

    useEffect(() => {
        const fetchMovieData = async () => {
            const movieResponse = await fetch(`${OMDB_URL}/?i=${id}&apikey=${OMDB_KEY}`);
            const movieData = await movieResponse.json();
            console.log(movieData);
            setMovie(movieData)
        };
        fetchMovieData();
    }, [OMDB_URL, id, OMDB_KEY])

    if (!movie) {
        return <div>Loading...</div>; // Add a loading state while fetching the movie data
    }

    return (
        <>
            <span className="hero">
                <img src={movie.Poster} alt="poster"></img>

                <div className="details">
                    <div className="name-date">
                        <h3>
                            Movie name  <p>{movie.Title}</p>
                        </h3>
                        <h3>
                            Release date  <p>{movie.Released}</p>
                        </h3>
                    </div>
                    <div className="time-duration">
                        <h3>
                            Movie duration  <p>{movie.Runtime}</p>
                        </h3>
                        <h3>
                            Ratings  <p>{movie.imdbRating}</p>
                        </h3>
                    </div>
                </div>
            </span>
            <Link to={ `/booking-confirm-page/${id}`}>
                <button className="book_button">
                    Book now
                </button>
            </Link>
            {/* <Link to={ isAuthenticated ? `/booking-confirm-page/${id}`
                                    : `/denied-page/${id}`}>
                <button className="book_button">
                    Book now
                </button>
            </Link> */}
        </>
    );
}

export default BHero;