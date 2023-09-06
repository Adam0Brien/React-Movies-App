import React from "react";
import MovieCard from "../components/showComponents/showCard";
import SampleMovie from "./sampleShowData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/showsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "App/Shows/ShowCard",
  component: MovieCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieCard
      show={SampleMovie}
      action={(movie) => <AddToFavouritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      show={sampleNoPoster}
      action={(movie) => <AddToFavouritesIcon show={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
