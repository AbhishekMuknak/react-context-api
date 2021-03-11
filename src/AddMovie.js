import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const addMovies = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: "$" + price },
    ]);
  };
  return (
    <form onSubmit={addMovies}>
      <input
        name="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={updateName}
      />
      <input
        name="text"
        name="price"
        placeholder="price"
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
