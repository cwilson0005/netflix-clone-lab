import React from "react";
import "./MovieItem.css"
import MovieToggle from "./MovieToggle";

const MovieItem = ({children}) => (
  <div className="media-card">
    {children}
    <MovieToggle movieLike={children[4].props.value}/>
  </div>
);

export default MovieItem;
