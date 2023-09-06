import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( [] )
  const [mustWatch,setMustWatch] = useState( [] )
  const [pageNum, setPageNum] = useState( [] )
  const [type, setType] = useState( [] )


  const setPageNumber = (num) => {
    setPageNum(num);
  }

  const setMovieType = (args) => {
    setType(args);
  }


  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      newMustWatch.push(movie.id);
    }
    setMustWatch(newMustWatch);
    console.log(newMustWatch)
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

 return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
        removeFromMustWatch,
        pageNum,
        setPageNumber,
        type,
        setMovieType,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;