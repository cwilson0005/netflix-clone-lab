import React from "react";
import "./MovieItem.css"

const MovieItem = ({children}) => (
  <div className="media-card">
    <h4>{children}</h4>
  </div>
);

export default MovieItem;
