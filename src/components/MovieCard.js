import React from "react";
import {Link} from "react-router-dom";


function MovieCard(props){
    // console.log(props.item.image);
    return(
       <div className="card_container">
             <img className="card-pic" src={props.item.image} alt="pic"/>
             <p>
                <Link to="/booking-page" className="card-link">Book</Link>
            </p>
       </div>
    );
}

export default MovieCard;