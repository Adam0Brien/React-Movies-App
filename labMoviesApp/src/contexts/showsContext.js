import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
  const [favouriteShows, setFavouriteShows] = useState( [] )
 // const [myReviews, setMyReviews] = useState( [] )
  const [mustWatchShows,setMustWatchShows] = useState( [] )

  const [pageNum, setPageNum] = useState( [] )
  const [type, setType] = useState( [] )


  const setPageNumber = (num) => {
    setPageNum(num);
  }

  const setMovieType = (args) => {
    setType(args);
  }



  const addToFavouriteShows = (show) => {
    let newFavourites = [...favouriteShows];
    if (!favouriteShows.includes(show.id)) {
      newFavourites.push(show.id);
    }
    setFavouriteShows(newFavourites);
  };

  const addToMustWatch = (show) => {
    let newMustWatch = [...mustWatchShows];
    if (!mustWatchShows.includes(show.id)) {
      newMustWatch.push(show.id);
    }
    setMustWatchShows(newMustWatch);
    console.log(newMustWatch)
  };

  // We will use this function in a later section
  const removeFromFavourites = (show) => {
    setFavouriteShows( favouriteShows.filter(
      (mId) => mId !== show.id
    ) )
  };

  const removeFromMustWatch = (show) => {
    setMustWatchShows( mustWatchShows.filter(
      (mId) => mId !== show.id
    ) )
  };

//   const addReview = (show, review) => {
//     setMyReviews( {...myReviews, [show.id]: review } )
//   };

 return (
    <ShowsContext.Provider
      value={{
        favouriteShows,
        addToFavouriteShows,
        removeFromFavourites,
        // addReview,
        mustWatchShows,
        addToMustWatch,
        removeFromMustWatch,
        pageNum,
        setPageNumber,
        type,
        setMovieType,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;