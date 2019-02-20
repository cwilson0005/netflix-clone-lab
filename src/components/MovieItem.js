import React from "react";
import "./MovieItem.css"
import MovieToggle from "./MovieToggle";

const MovieItem = (props, {children}) => {
  // console.log(props.toggleValue)

  return (<div className="media-card">
    {children}
    <MovieToggle toggleValue={props.toggleValue}/>
  </div>)
};

export default MovieItem;
