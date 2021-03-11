import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: 0,
        background: "grey",
      }}
    >
      <h3 style={{ color: "white" }}>@b</h3>
      <h4 style={{ color: "white" }}>List of Movies:{movies.length}</h4>
    </div>
  );
};

export default Nav;
