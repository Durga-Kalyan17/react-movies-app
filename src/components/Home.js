import React from "react";
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";
import ImageSlider from "./MovieSlider";
import MovieCard from "./MovieCard";
import data from "./MovieData";


function Home() {

    const movie = data.map(element => {
        return (
            <MovieCard
                item={element}
            />
        );
    });

    return (
        <div className="home">
            <div className="search">
                <SearchBox />
            </div>
            <div>
                <NavBar />
            </div>
            <div>
                <ImageSlider />
            </div>
            <h1 className="recomendations">Recommended Movies</h1>
            <section className="card">
                    {movie}
            </section>
        </div>
    );
}

export default Home;