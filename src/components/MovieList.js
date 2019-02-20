import React from "react";
import MovieItem from "./MovieItem";
import "./MovieList.css"

const MovieList = (movies) => {
  console.log("movie name and id", movies);
  // console.log(typeof(movies));

  if (movies.length === 0){
    return <p>Loading Movie info...</p>;
  }

  const movieNodes = movies.movies.map(movie => {
    if (movie.like === false){
      movie.like = "Miss";
    }else{
      movie.like = "Hit";
    }
    return (
      <MovieItem key={movie._id} toggleValue={movie.like}>
        <p>{movie.name}</p>
        <p>{movie.genre}</p>
        <p>{movie.language}</p>
        <img className="movie-image" src={movie.image} alt="Image is coming"></img>
        <input type="button" value={movie.like}></input>
      </MovieItem>
    );
  });

  return (
    <div className="movie-list">
      {movieNodes}
    </div>
  );
}

export default MovieList;
