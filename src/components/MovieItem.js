import React from "react";
import "./MovieItem.css"
import MovieToggle from "./MovieToggle";

const MovieItem = (props) => {
  // console.log(children)

  return (
    <div className="media-card">
      <p>{props.movieName}</p>
      <p>{props.movieGenre}</p>
      <p>{props.movieLanguage}</p>
      <img className="movie-image" src={props.movieImage} alt=""></img>
      <MovieToggle toggleValue={props.toggleValue}/>
    </div>)
};

export default MovieItem;
