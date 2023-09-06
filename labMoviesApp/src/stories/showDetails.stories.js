import React from "react";
import ShowDetails from "../components/showComponents/showDetails";
import SampleShow from "./sampleShowData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/showsContext";

export default {
  title: "App/Shows/ShowDetails",
  component: ShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <ShowDetails show={SampleShow} />;

Basic.storyName = "Default";
