import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { ShowsContext } from "../../../contexts/showsContext";
import WatchLaterIcon from "@mui/icons-material/Visibility";




export default function ShowCard({ show, action }) {
  const { favouriteShows, addToFavouriteShows, mustWatchShows, addToMustWatchShows } = useContext(ShowsContext);
 
   if (favouriteShows.find((id) => id === show.id)) {
     show.favouriteShows = true;
   } else {
     show.favouriteShows = false
   }
   
 
   const handleAddToFavourite = (e) => {
     e.preventDefault();
     addToFavouriteShows(show);
   };

   if (mustWatchShows.find((id) => id === show.id)) {
    show.mustWatchShows = true;
  } else {
    show.mustWatchShows = false
  }

   const handleAddToMustWatch = (e) => {
    e.preventDefault();
    addToMustWatchShows(show);
  };


  return (
    <Card sx={{ maxWidth: 345 , backgroundColor: "#292828",border: '3px solid rgba(255,255,255,1)' }}>
          <CardHeader
        avatar={
          show.favouriteShows ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : show.mustWatchShows ? (
            <Avatar sx={{ backgroundColor: 'purple' }}>
              <WatchLaterIcon />
            </Avatar>
          ) : null
        }
        
        title={
          <Typography variant="h5" component="p" sx={{
            color: "white"
          }}>
            {show.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 ,backgroundColor: "black"}}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img
        }
      />
      <CardContent sx={{
            color: "white"
          }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {show.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {show.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(show)}
        <Link to={`/shows/${show.id}`}>
          <Button variant="outlined" size="medium" sx={{
            color: "white"
          }}>
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}