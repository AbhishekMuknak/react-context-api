import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext); //get data from context
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} id={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
