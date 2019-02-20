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
      <MovieItem key={movie._id} toggleValue={movie.like} movieName={movie.name}
      movieGenre={movie.genre} movieLanguage={movie.language} movieImage={movie.image}>
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
