import React, { useState, createContext } from "react";

export const MovieContext = createContext();

/********
 * @Provide information to diff component
 */
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", price: "$10", id: 23124 },
    { name: "Game Of Thrones", price: "$10", id: 2566124 },
    { name: "Inception", price: "$10", id: 23524 },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
      {/********@render all child component */}
    </MovieContext.Provider>
  );
};
