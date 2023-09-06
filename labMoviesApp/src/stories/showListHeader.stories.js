import React from "react";
import ShowListHeader from "../components/showComponents/headerShowList";

export default {
  title: "App/Shows/Header",
  component: ShowListHeader,
};

export const Basic = () => <ShowListHeader title={'Discover Shows'} />;

Basic.storyName = "Default";