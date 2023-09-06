import React from "react";

const SimilarMovie =  ({ movie }) => {
  return (
    <>
      <p>Similar Movies : {movie.title} </p>
      {/* <p>{movie.content} </p> */}
    </>
  );
};
export default SimilarMovie