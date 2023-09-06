import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    
    <Paper sx={{
            background: "#292828"
          }}>

      <>
      <Typography variant="h5" component="h3" sx={{
            color: "slategrey"
          }}>
        Overview
      </Typography>

      <Typography variant="h6" component="p" sx={{
            color: "grey"
          }}>
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{
          background: "#292828"
        }}
      >
        
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{
            background: "slategrey"
          }}/>
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{
            background: "#292828"
          }}>
      
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} sx={{
            background: "slategrey"
          }}/>
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`} 
          sx={{
            background: "slategrey"
          }}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
          sx={{
            background: "slategrey"
          }}
        />
        <Chip label={`Released: ${movie.release_date}`} sx={{
            background: "slategrey"
          }}/>
      </Paper>
      <Paper 
        component="ul" 
        sx={{
          background: "#292828"
        }}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        {movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={{
            background: "slategrey"
          }} />
          </li>
        ))}
      </Paper>
      <Fab
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em',
          background:"slategrey"
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
    </Paper>
  );
};
export default MovieDetails ;