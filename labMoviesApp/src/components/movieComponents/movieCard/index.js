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
import { MoviesContext } from "../../../contexts/moviesContext";
import WatchLaterIcon from "@mui/icons-material/Visibility";




export default function MovieCard({ movie, action }) {
  const { favourites, addToFavourites, mustWatch, addToMustWatch } = useContext(MoviesContext);
 
   if (favourites.find((id) => id === movie.id)) {
     movie.favourite = true;
   } else {
     movie.favourite = false
   }
   
 
   const handleAddToFavourite = (e) => {
     e.preventDefault();
     addToFavourites(movie);
   };

   if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false
  }

   const handleAddToMustWatch = (e) => {
    e.preventDefault();
    addToMustWatch(movie);
  };
 


  return (
    <Card sx={{ maxWidth: 345 , backgroundColor: "#292828",border: '3px solid rgba(255,255,255,1)' }}>
          <CardHeader
        avatar={
          movie.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : movie.mustWatch ? (
            <Avatar sx={{ backgroundColor: 'purple' }}>
              <WatchLaterIcon />
            </Avatar>
          ) : null
        }
        
        title={
          <Typography variant="h5" component="p" sx={{
            color: "white"
          }}>
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 ,backgroundColor: "black"}}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
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
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(movie)}
        <Link to={`/movies/${movie.id}`}>
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