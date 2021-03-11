import React, { useState } from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{price}</h3>
      <h3>{id}</h3>
    </div>
  );
};

export default Movie;
