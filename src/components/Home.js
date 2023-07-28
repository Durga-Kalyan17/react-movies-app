import React from "react";
import NavBar from "./NavBar";
import ImageSlider from "./MovieSlider";
import MovieList from "./MovieList";
import HomeHeader from "./HomeHeader";


function Home() {

    return (
        <>
            <HomeHeader />
            <NavBar />
            <ImageSlider />
            <MovieList />
        </>
    );
}

export default Home;