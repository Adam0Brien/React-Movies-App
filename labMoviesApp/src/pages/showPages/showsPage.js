import React from "react";
import { getShows } from "../../api/tmdb-api";
import PageTemplate from '../../components/showComponents/templateShowListPage';
import { useQuery } from 'react-query';
import Spinner from '../../components/spinner';
import AddToFavouritesIcon from '../../components/cardIcons/addToShowFavourites'
import AddToMustWatchIcon from "../../components/cardIcons/addToShowMustWatch";


const ShowsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover-tv', getShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const shows = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const favourites = movies.filter(m => m.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      name="Discover Shows"
      shows={shows}
      action={(show) => {
        return(
        <>
            <AddToFavouritesIcon show={show} />
            <AddToMustWatchIcon show={show} />
        </>
        );
      }}
    />

);


};


export default ShowsPage;