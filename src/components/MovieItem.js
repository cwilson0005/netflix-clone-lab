import React from "react";
import "./MovieItem.css"

const MovieItem = ({children}) => (
  <div className="media-card">
    {children}
  </div>
);

export default MovieItem;
