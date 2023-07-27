import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SearchBox from "./SearchBox";
import NavBar from "./NavBar";
import ImageSlider from "./MovieSlider";
import MovieList from "./MovieList";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";


function Home() {

    const { isAuthenticated, user } = useAuth0();

    const message = isAuthenticated && user.name && user.name.indexOf(' ') !== -1
                    ? `Hi, ${user.name.substring(0, user.name.indexOf(' '))}`
                    : "Hearty Welcome, Guest";

    return (
        <>
            <div className="search">
                <h1 className="home_header">Home</h1>
                <SearchBox />
                <h3 className="user"> { message } </h3>
                { isAuthenticated ? <LogoutButton /> : <LoginButton /> }
            </div>
            <div>
                <NavBar />
            </div>
            <div className="img_slider">
                <ImageSlider />
            </div>
            <h1 className="recomendations">Recommended Movies</h1>
            <MovieList />
        </>
    );
}

export default Home;