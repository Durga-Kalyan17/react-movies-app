import React from "react";


function MovieCard(props){
    console.log(props.item.image);
    return(
       <div className="card_container">
             <img className="card-pic" src={props.item.image} alt="pic"/>
             <button className="card-button">Book</button>
       </div>
    );
}

export default MovieCard;