import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../../api/tmdb-api";
import { positions } from "@mui/system";



export default function SimilarMovies({ movie }) {
  const [movies, setMovies] = useState([]);

  const tableCellStyle = {
    backgroundColor: "#292828",
    color:"white"

  }

  useEffect(() => {
    getSimilarMovies(movie.id).then((movies) => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <TableContainer component={Paper} sx={{backgroundColor: "#292828"}} >
      <Table sx={{minWidth: 550}} aria-label="movies table">
        <TableHead>
          <TableRow>
            <TableCell  sx={{backgroundColor: "#292828" ,color:"white"}} >Similar Movies</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((r) => (
            <TableRow key={r.id} >
                
             <TableCell component="th" scope="row"  sx={{backgroundColor: "#292828" ,color:"white"}}>
              <Link
                  to={`/movies/${r.id}`}
                  state={{
                      movie: movie,
                  }}
                >
                 {r.title}
                </Link>
              </TableCell>
              <TableCell  sx={{backgroundColor: "#292828" ,color:"white"}}>{r.overview}</TableCell>
              <TableCell  sx={{backgroundColor: "#292828" ,color:"white"}}>{r.vote_average}/10</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
