import React, {useContext} from "react";
import { getTopMovies } from "../../api/tmdb-api";
import PageTemplate from '../../components/movieComponents/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../../components/spinner';
import AddToFavouritesIcon from '../../components/cardIcons/addToFavourites'
import { MoviesContext } from "../../contexts/moviesContext";
import { useParams } from "react-router-dom"


const TopMoviesPage = (props) => {

  const {setPageNumber, setMovieType} = useContext(MoviesContext);
  const {pageNumber} = useParams();

  const {  data, error, isLoading, isError }  = useQuery([`top`,{pageNum:pageNumber}], getTopMovies)
  setPageNumber(pageNumber);
  setMovieType('top')
  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Top Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
);
};


export default TopMoviesPage;