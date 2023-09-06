import React from "react";
import MovieListHeader from "../components/movieComponents/headerMovieList";

export default {
  title: "App/Movies/Header",
  component: MovieListHeader,
};

export const Basic = () => <MovieListHeader title={'Discover Movies'} />;

Basic.storyName = "Default";