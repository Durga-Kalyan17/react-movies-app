import React, { useState, useEffect } from "react";
import UpCpomingMovieCard from "./UpComingMovieCard";


function UpComingMovieList() {
    const [movies, setMovies] = useState([]);

    

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_TMDB_API_KEY
            }
          };

        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }, []);

    return <div className="uc_card_slider">
        <div className="uc_card">
            {movies && movies.length > 0 ? (
                movies.map((movie, index) => {
                    return <UpCpomingMovieCard key={index} props={movie} />;
                })
            ) : (
                <div className="error">No movies found.</div>
            )}
        </div>
    </div >
}

export default UpComingMovieList;