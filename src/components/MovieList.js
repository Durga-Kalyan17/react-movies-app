import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    // const IMDB_HOST = process.env.REACT_APP_IMDB_HOST
    // const IMDB_KEY = process.env.REACT_APP_IMDB_KEY
    const OMDB_URL = process.env.REACT_APP_OMDB_URL
    const OMDB_KEY = process.env.REACT_APP_OMDB_KEY
    //https://${IMDB_HOST}/title/get-most-popular-movies
    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/movies/get/popular-movies`, {
                    method: 'GET'//,
                    // headers: {
                    //     'X-RapidAPI-Key': IMDB_KEY,
                    //     'X-RapidAPI-Host': IMDB_HOST
                    // }
                });

                const result = await response.json();
                console.log(result);
                const movieIds = result.map((movie) => {
                    const urlParts = movie.split('/');
                    return urlParts[2];
                }).slice(0, 40);
                // }).sort(() => Math.random() - 0.5).slice(0, 40);
                console.log(movieIds);
                const moviePromises = movieIds.map(async id => {
                    const movieResponse = await fetch(`${OMDB_URL}?i=${id}&apikey=${OMDB_KEY}`);
                    const movieData = await movieResponse.json();
                    console.log(movieData);
                    return movieData;
                });

                const movieData = await Promise.all(moviePromises);
                console.log(movieData)
                setMovies(movieData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieData();
    }, [OMDB_URL, OMDB_KEY]);

    return <div className="card_slider">
        <div className="card">
            {movies && movies.length > 0 ? (
                movies.map((movie, index) => {
                    return <MovieCard key={index} props={movie} />;
                })
            ) : (
                <div className="error">No movies found.</div>
            )}
        </div>
    </div >
}

export default MovieList;
