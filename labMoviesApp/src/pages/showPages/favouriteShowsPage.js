import React, { useContext } from "react";
import PageTemplate from "../../components/showComponents/templateShowListPage";
import { ShowsContext } from "../../contexts/showsContext";
import { useQueries } from "react-query";
import { getShow } from "../../api/tmdb-api";
import Spinner from '../../components/spinner'
import { Paper } from "@mui/material";
import RemoveFromFavouritesIcon from "../../components/cardIcons/removeShowsFromFavourites";
//import WriteReviewIcon from "../components/cardIcons/writeMovieReview";




const FavouriteShowsPage = () => {
  const {favouriteShows: showIds } = useContext(ShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteShowQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteShowQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favouriteShowQueries.map((q) => {
    q.data.genres = q.data.genres.map(g => g.id)
    return q.data
  });

  //const toDo = () => true;
  
  return (
    <PageTemplate
      name="Favourite TV Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
          <Paper />
            <RemoveFromFavouritesIcon show={show} />
            {/* <WriteReviewIcon movie={show} /> */}
          </>
        );
      }}
    />
  );
};

export default FavouriteShowsPage;