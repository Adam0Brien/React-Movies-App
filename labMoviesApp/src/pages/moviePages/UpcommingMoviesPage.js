import React, {useContext} from "react";
import { getUpcommingMovies } from "../../api/tmdb-api";
import PageTemplate from '../../components/movieComponents/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../../components/spinner';
import AddToFavouritesIcon from '../../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddToMustWatchIcon from "../../components/cardIcons/addToMustWatch";
import { MoviesContext } from "../../contexts/moviesContext";
import { useParams } from "react-router-dom"



const UpcommingMoviesPage = (props) => {

  const {setPageNumber, setMovieType} = useContext(MoviesContext);
  const {pageNumber} = useParams();

  const {  data, error, isLoading, isError }  = useQuery([`upcomming`,{pageNum:pageNumber}], getUpcommingMovies)
  setPageNumber(pageNumber);
  setMovieType('upcomming')

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  // const mustWatch = movies.filter(m => m.favourite)
  // localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  // const addToMustWatch = (movieId) => true 

  return (
    <PageTemplate
      title="Upcomming Movies"
      movies={movies}
      action={(movie) => {
        return (
        <>
            <AddToMustWatchIcon movie={movie} />
        </>
  )}}
    />
);
};


export default UpcommingMoviesPage;