import React, { useState } from "react";
//import Header from "../headerMovieList";
import Header from "../headerShowList"
import FilterCard from "../filterShowsCard";
import ShowList from "../showList";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import PaginationOutlined from "../../movieComponents/footer";

function ShowListPageTemplate({ shows, name, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedShows = shows
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Paper sx={{
      background: "#292828" 


    }}>
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header name={name} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            nameFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <ShowList action={action} shows={displayedShows}></ShowList>
      </Grid>
    </Grid>
    <PaginationOutlined> </PaginationOutlined>
    </Paper>
  );
}
export default ShowListPageTemplate;