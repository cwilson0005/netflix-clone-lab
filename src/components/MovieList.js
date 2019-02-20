import React from "react";
import MovieItem from "./MovieItem";

const MovieList = (movies) => {
  console.log("movie name and id", movies);
  // console.log(typeof(movies));

  if (movies.length === 0){
    return <p>Loading Movie info...</p>;
  }

  const movieNodes = movies.movies.map(movie => {
    return (
      <MovieItem key={movie.id}>
        {movie.name}
      </MovieItem>
    );
  });

  return (
    <div>
    {movieNodes}
    </div>
  );
}

export default MovieList;
