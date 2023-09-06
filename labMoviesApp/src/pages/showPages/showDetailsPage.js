import React from "react";
import { useParams } from 'react-router-dom';
import ShowDetails from "../../components/showComponents/showDetails/";
import PageTemplate from "../../components/showComponents/templateShowPage";
 //import useMovie from "../hooks/useMovie";   Redundant
import { getShow } from '../../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../../components/spinner'
import { Paper } from "@mui/material";
import SimilarShows from "../../components/showComponents/similarShows";
//import SimilarMovies from "../components/similarMovies";


const ShowDetailsPage = (props) => {
  const { id } = useParams();

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show} >
            <ShowDetails show={show} />
            <SimilarShows show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for show details</p>
      )}
    </>
  );
};

export default ShowDetailsPage;