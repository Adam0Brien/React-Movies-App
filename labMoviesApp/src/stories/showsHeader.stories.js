import React from "react";
import MoviesHeader from "../components/showComponents/headerShowList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/showsContext";

export default {
  title: "App/Shows/ShowPageHeader",
  component: MoviesHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <MoviesHeader title="Discover Movies" />;

Basic.storyName = "Default";
