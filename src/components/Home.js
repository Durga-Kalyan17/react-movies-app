import React from "react";
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";
import ImageSlider from "./MovieSlider";
// import MovieCard from "./MovieCard";
// import data from "./MovieData";
import MovieList from "./MovieList";


function Home() {

    // const movie = data.map(element => {
    //     return (
    //         <MovieCard
    //             // item={element}
    //         />
    //     );
    // });

    return (
        <>
            <div className="search">
                <SearchBox />
            </div>
            <div>
                <NavBar />
            </div>
            <div className="img_slider">
                <ImageSlider />
            </div>
            <h1 className="recomendations">Recommended Movies</h1>
            {/* <MovieCard /> */}
            {/* <section className="card-list"> */}
            <MovieList />
            {/* </section> */}
        </>
    );
}

export default Home;